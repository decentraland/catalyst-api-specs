Paths
=====

Organize your path definitions within this folder.  You will reference your paths from your main `openapi.yaml` entrypoint file.

It may help you to adopt some conventions:

* path separator token (e.g. `@`) or subfolders
* path parameter (e.g. `{example}`)
* file-per-path or file-per-operation


### Use subfolders to mirror API path structure

Example:
```
GET /content/deployments

/paths/content/content@deployments.yaml
```

In this case, the path id defined within subfolders which mirror the API URL structure.




