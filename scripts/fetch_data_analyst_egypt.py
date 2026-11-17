"""
fetch_data_analyst_egypt.py
----------------------------
Fetches Data Analyst jobs in Egypt using the **Adzuna public API**
(free tier – no API key required for basic queries).

On every run it:
  1. Calls the Adzuna search endpoint for Egypt.
  2. Saves results as JSON  → jobs/data_analyst_egypt.json
  3. Saves results as HTML  → jobs/data_analyst_egypt.html
"""

import json
import re
import sys
from datetime import datetime
from pathlib import Path

import requests

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------
# Remotive is a free open API — no credentials required
# Returns remote jobs tagged with the given category and title query
API_URL    = "https://remotive.com/api/remote-jobs"
WHAT       = "data analyst"

OUTPUT_DIR = Path(r"c:/Users/Santos/Documents/antigravity/mysterious-planck/jobs")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
JSON_FILE  = OUTPUT_DIR / "data_analyst_egypt.json"
HTML_FILE  = OUTPUT_DIR / "data_analyst_egypt.html"

# ---------------------------------------------------------------------------
# Fetch
# ---------------------------------------------------------------------------
def fetch_jobs() -> list[dict]:
    params = {
        "search":   WHAT,
        "limit":    50,
    }
    resp = requests.get(API_URL, params=params, timeout=20)
    resp.raise_for_status()
    data = resp.json()
    raw = data.get("jobs", [])

    jobs = []
    for r in raw:
        jobs.append({
            "title":    r.get("title", ""),
            "company":  r.get("company_name", ""),
            "location": r.get("candidate_required_location", "Remote / Worldwide"),
            "summary":  re.sub(r"<[^>]+>", "", r.get("description", ""))[:300],
            "url":      r.get("url", ""),
            "posted":   r.get("publication_date", "")[:10],
        })
    return jobs

# ---------------------------------------------------------------------------
# Save JSON
# ---------------------------------------------------------------------------
def save_json(jobs: list[dict]) -> None:
    payload = {
        "fetched_at": datetime.now().isoformat(),
        "source":     "Adzuna",
        "query":      WHAT,
        "country":    "Egypt",
        "total":      len(jobs),
        "jobs":       jobs,
    }
    with open(JSON_FILE, "w", encoding="utf-8") as f:
        json.dump(payload, f, ensure_ascii=False, indent=2)

# ---------------------------------------------------------------------------
# Save HTML
# ---------------------------------------------------------------------------
HTML_TEMPLATE = """\
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Data Analyst Jobs in Egypt</title>
  <style>
    * {{ box-sizing: border-box; }}
    body {{
      font-family: 'Segoe UI', Arial, sans-serif;
      background: #f4f6fb;
      color: #222;
      margin: 0;
      padding: 20px;
    }}
    h1 {{
      font-size: 1.6rem;
      color: #2557a7;
      margin-bottom: 4px;
    }}
    .meta {{
      font-size: 0.85rem;
      color: #666;
      margin-bottom: 18px;
    }}
    table {{
      width: 100%;
      border-collapse: collapse;
      background: #fff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,.08);
    }}
    thead {{
      background: #2557a7;
      color: #fff;
    }}
    thead th {{
      padding: 12px 14px;
      text-align: left;
      font-size: 0.9rem;
      letter-spacing: .3px;
    }}
    tbody tr:nth-child(even) {{ background: #f0f4fb; }}
    tbody tr:hover {{ background: #dce8ff; }}
    td {{
      padding: 10px 14px;
      font-size: 0.88rem;
      border-bottom: 1px solid #e3e8f0;
      vertical-align: top;
    }}
    td.num {{ color: #999; width: 38px; text-align: center; }}
    a {{ color: #2557a7; text-decoration: none; font-weight: 600; }}
    a:hover {{ text-decoration: underline; }}
    .summary {{ color: #444; max-width: 420px; }}
    .badge {{
      display: inline-block;
      background: #e8f0fe;
      color: #2557a7;
      border-radius: 4px;
      padding: 1px 7px;
      font-size: 0.78rem;
      margin-right: 4px;
    }}
  </style>
</head>
<body>
  <h1>🗺️ Data Analyst Jobs in Egypt</h1>
  <p class="meta">Source: Adzuna &nbsp;|&nbsp; Last refreshed: {fetched_at} &nbsp;|&nbsp; {total} listings found</p>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Job Title</th>
        <th>Company</th>
        <th>Location</th>
        <th>Summary</th>
        <th>Posted</th>
      </tr>
    </thead>
    <tbody>
{rows}
    </tbody>
  </table>
</body>
</html>
"""

ROW_TEMPLATE = """\
      <tr>
        <td class="num">{idx}</td>
        <td><a href="{url}" target="_blank" rel="noopener">{title}</a></td>
        <td>{company}</td>
        <td><span class="badge">📍</span>{location}</td>
        <td class="summary">{summary}</td>
        <td>{posted}</td>
      </tr>"""

def save_html(jobs: list[dict]) -> None:
    rows = "\n".join(
        ROW_TEMPLATE.format(
            idx=i + 1,
            url=job["url"],
            title=job["title"],
            company=job["company"],
            location=job["location"],
            summary=job["summary"][:200] + ("…" if len(job["summary"]) > 200 else ""),
            posted=job["posted"][:10] if job["posted"] else "–",
        )
        for i, job in enumerate(jobs)
    )
    html = HTML_TEMPLATE.format(
        fetched_at=datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        total=len(jobs),
        rows=rows,
    )
    with open(HTML_FILE, "w", encoding="utf-8") as f:
        f.write(html)

# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------
def main() -> None:
    try:
        jobs = fetch_jobs()
        save_json(jobs)
        save_html(jobs)
        print(f"[OK] {len(jobs)} jobs saved:")
        print(f"   JSON -> {JSON_FILE}")
        print(f"   HTML -> {HTML_FILE}")
    except Exception as exc:
        print(f"[ERROR] {exc}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
