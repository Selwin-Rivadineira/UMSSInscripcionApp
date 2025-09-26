# Specification Repository

## File Usages
* [MODERNIZATION-SPECIFICATION-TEMPLATE.md](./MODERNIZATION-SPECIFICATION-TEMPLATE.md): the template file for the specifications generation.
* [PROGRESS.md](./PROGRESS.md): the list of scenarios for progress tracking.

## Generate Specifications for A Given X->Y Pair

1. Open Copilot Agent mode, choose a more advanced LLM model such as `Sonnet 4`
2. Ensure the `PROGRESS.md` file is open and active
3. Add the `MODERNIZATION-SPECIFICATION-TEMPLATE.md` to the context.
4. Use the following prompt to generate specification for a particular X->Y pair. (replace the list item with the one you want)

    ```md
    Follow the guide in `PROGRESS.md` to generate the specification for `- [68] AWS S3 [8] → Azure Blob Storage (azure/aws-s3-to-azure-blob.md)`
    You should only take the context from `PROGRESS.md` and `MODERNIZATION-SPECIFICATION-TEMPLATE.md`. You MUST NOT reference other files including existing specifications.
    ```
