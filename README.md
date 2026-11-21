# ReproCue example

This sample exercises an upload-and-retry flow in a browser. The baseline gets stuck on “Uploading…” after a failed upload. The repair shows an error and lets the user retry.

## Verify a pull request

1. Put a repo-relative Playwright scenario in the pull request branch.
2. Add `ReproCue-Spec: tests/retry.spec.mjs` to the pull request description.
3. Apply the `reprocue` label.
4. Open the workflow summary from the pull request checks. The `reprocue-evidence` artifact contains the report and both browser traces.

For setup details, see [ReproCue](https://github.com/zyw0815/ReproCue).

## Compare the error state

The visual example tests the upload panel after a failed upload. Its screenshot checkpoint records the same moment in both versions. The before view shows the ordinary status text; the after view shows the error banner.

Open the ReproCue comment in the pull request conversation and follow its evidence link. Extract the artifact and open `report.html` in a browser to see both screenshots together.

## Open the comparison in your browser

The [published example report](https://zyw0815.github.io/ReproCue-example/reports/pr-6/1284476e7f12735a832f856f23f986feb0ae0517/) is the same verification of the upload error state shown on [PR #6](https://github.com/zyw0815/ReproCue-example/pull/6). GitHub Pages publishes the approved report from `docs/` on `develop`.

Report paths include the PR number and the verified head commit. When publishing a new public demo report, place the standalone comparison in a new directory so existing PR links keep working.
