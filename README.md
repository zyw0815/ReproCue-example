# ReproCue example

This sample exercises an upload-and-retry flow in a browser. The baseline gets stuck on “Uploading…” after a failed upload. The repair shows an error and lets the user retry.

## Verify a pull request

1. Put a repo-relative Playwright scenario in the pull request branch.
2. Add `ReproCue-Spec: tests/retry.spec.mjs` to the pull request description.
3. Apply the `reprocue` label.
4. Open the workflow summary from the pull request checks. The `reprocue-evidence` artifact contains the report and both browser traces.

For setup details, see [ReproCue](https://github.com/zyw0815/ReproCue).
