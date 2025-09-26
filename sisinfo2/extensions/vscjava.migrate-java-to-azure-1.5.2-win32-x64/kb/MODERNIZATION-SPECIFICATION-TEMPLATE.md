**TEMPLATE METADATA:**
This template is used to generate specific X→Y migration specifications. The content below the payload separator will be included in the generated specification file with placeholders replaced by actual technology names and details.

**VERSION GUIDANCE FOR LLM:**
When generating the actual migration specification, replace all version numbers (e.g., `:2.0.0`, `:1.14.2`) with the latest compatible versions from the technology compatibility matrix. The versions shown in this template are examples only - always use the most current stable versions that are compatible with the target technology stack.

**PAYLOAD BEGINS HERE:**
---
id: {source-technology-slug}-to-{target-technology-slug}
title: Migrate {SOURCE_TECHNOLOGY} to {TARGET_TECHNOLOGY}
description: Provides specifications for migrating from {SOURCE_TECHNOLOGY} to {TARGET_TECHNOLOGY}
---
# Migration Specification: {X:SOURCE_TECHNOLOGY} to {Y:TARGET_TECHNOLOGY}

## Overview

(This section provides a high-level description of the migration from {SOURCE_TECHNOLOGY} to {TARGET_TECHNOLOGY}. It should briefly explain what this migration entails and the scope of changes required.)

## Key Components to Replace

(This section provides essential mappings of source technology components to their target technology equivalents. Include additional considerations only when there are special requirements, breaking changes, or non-obvious migration points.)

- **{Source component/feature} with {Target equivalent}**: {Only include if there are special considerations, breaking changes, or critical migration points that developers must be aware of}
- **{Source protocol/API} with {Target protocol/API}**: {Only include if there are protocol differences, API compatibility issues, or client adaptation requirements that need attention}
- **{Source configuration pattern} with {Target configuration pattern}**: {Only include if there are configuration model changes, migration strategy, or validation considerations that require care}
- **{Source operational tool} with {Target operational tool}**: {Only include if there are tooling differences, learning curve considerations, or integration requirements that need planning}
- **{Source architectural pattern} with {Target architectural pattern}**: {Only include if there are architectural changes, refactoring implications, or performance characteristics that require attention}

## Scope

(This section clearly delineates what is and isn't included in the migration effort. This helps set proper expectations and prevents scope creep during execution.)

### Included in Scope

(List all components, processes, and changes that are part of this migration. Use checkboxes to make it easy to track progress during actual migration execution.)

- [x] {Core component migration task}
- [x] {Configuration and setup changes}
- [x] {Code pattern adaptations}
- [x] {Error handling and operational concerns}
- [x] {Documentation and knowledge transfer}
- [x] **{SOURCE_TECHNOLOGY} removal and cleanup** - Complete elimination of source technology dependencies, imports, configurations, and code references

### Excluded from Scope

(List items that might seem related but are explicitly not part of this migration effort. This prevents confusion and helps maintain focus.)

- [ ] {Related but separate modernization efforts}
- [ ] {Business logic changes unrelated to the technology migration}
- [ ] {Performance optimization beyond basic configuration}
- [ ] {Advanced features that require separate consideration}
- [ ] {Integration with external systems not directly affected}

## Success Criteria

(This section defines measurable outcomes that indicate a successful code migration. These should be specific, testable conditions that can be verified at the code level without requiring full runtime deployment.)

1. {Code compilation criterion - all source code compiles successfully with target technology}
2. {Dependency resolution criterion - all required dependencies are correctly configured and resolved}
3. {Configuration migration criterion - all configuration files are updated to target technology format}
4. {API compatibility criterion - all API calls and integrations use target technology patterns}
5. {Code pattern migration criterion - all source technology patterns are replaced with target equivalents}
6. {Error handling adaptation criterion - error handling follows target technology best practices}
7. {Code quality criterion - migrated code follows target technology coding standards}
8. {Documentation criterion - code comments and inline documentation reflect target technology usage}
9. **{SOURCE_TECHNOLOGY} elimination criterion - no source technology dependencies, imports, or references remain in the codebase**

## Migration Steps

(High-level migration phases with focus on unique considerations and commonly missed aspects.)

### 1. Dependency and Configuration Updates

1. **Add {TARGET_TECHNOLOGY} dependencies** - Use latest stable versions with proper BOMs for consistency
2. **Configure secure authentication** - **Critical for Azure services: Use Managed Identity instead of connection strings/keys**
3. **Update configuration files** - Migrate to {TARGET_TECHNOLOGY} format and remove {SOURCE_TECHNOLOGY} settings
4. **Remove {SOURCE_TECHNOLOGY} dependencies** - **Often missed: Ensure complete elimination to prevent conflicts**

### 2. Code Migration

1. **Replace import statements** - Update all {SOURCE_TECHNOLOGY} imports to {TARGET_TECHNOLOGY} equivalents
2. **Migrate API calls and patterns** - Replace core functionality following {TARGET_TECHNOLOGY} best practices
3. **Update error handling** - **Migration-specific: Adapt to {TARGET_TECHNOLOGY} exception patterns and retry mechanisms**
4. **Adapt authentication patterns** - **Critical difference: Update connection/client initialization patterns**

### 3. Validation and Cleanup

1. **Complete source technology removal** - **Commonly missed: Search and remove all {SOURCE_TECHNOLOGY} code comments, utility classes, and documentation references**
2. **Verify compilation and functionality** - Ensure all code compiles and uses only {TARGET_TECHNOLOGY} APIs
3. **Validate configuration completeness** - **Migration-specific: Confirm no {SOURCE_TECHNOLOGY} configuration properties remain**

## Migration Patterns and Technical Specifications

(This section provides comprehensive guidance for migrating from source to target technology. Each pattern includes both conceptual explanation and concrete code examples. For features without direct equivalents, explicitly document the chosen alternative solution to ensure consistent migration results.)

### 0. Library Versions and Dependency Management

**Dependency Strategy:**
- **Use Bill of Materials (BOMs)**: Prioritize using BOMs for consistent library versioning across the project. Check existing project BOMs and reuse them when possible
- **Latest Stable Versions**: Use the latest stable version of {TARGET_TECHNOLOGY} libraries for security updates and bug fixes
- **Version Consistency**: Ensure all {TARGET_TECHNOLOGY} libraries use compatible versions to prevent conflicts
- **Azure Security**: When migrating to Azure services, include Azure Identity library for secure authentication

**Required Dependencies:**
- **Core {TARGET_TECHNOLOGY} libraries**:
  - Primary: `{target.group.id}:{target-core-artifact}:2.0.0` *(use latest compatible version)*
  - Client: `{target.group.id}:{target-client-artifact}:2.0.0` *(use latest compatible version)*
- **Azure Identity library**: `com.azure:azure-identity:1.14.2` *(use latest compatible version when {TARGET_TECHNOLOGY} is Azure-based, replaces connection strings/keys)*
- **Supporting libraries**: `{support.group.id}:{support-artifact}:1.5.0` *(use latest compatible version for specific features or integrations)*
- **Remove {SOURCE_TECHNOLOGY} dependencies**: Completely eliminate `{source.group.id}:{source-artifact}:*` to prevent conflicts

**Version Management Approach:**
- **Primary Strategy**: Import {TARGET_TECHNOLOGY} BOM `{target.bom.group.id}:{target-technology-bom}:1.0.0` *(use latest compatible version)* if available for automatic version management
- **Azure Integration**: Include Azure SDK BOM `com.azure:azure-sdk-bom:1.2.28` *(use latest compatible version)* when migrating to Azure services for consistent Azure library versions
- **Project Integration**: Reuse existing project BOMs (e.g., `org.springframework.boot:spring-boot-dependencies:3.4.1` *(use latest compatible version)*) to maintain compatibility
- **Explicit Versions**: Only specify explicit versions for libraries not managed by BOMs

**Recommended Versions:** *(All versions shown are examples - use latest compatible versions from technology compatibility matrix)*
- **{TARGET_TECHNOLOGY} BOM**: `{target.bom.group.id}:{target-technology-bom}:1.0.0` (if available)
- **{TARGET_TECHNOLOGY} Core**: `{target.group.id}:{target-core-artifact}:2.0.0`
- **Azure SDK BOM**: `com.azure:azure-sdk-bom:1.2.28` (when {TARGET_TECHNOLOGY} is Azure-based)
- **Azure Identity**: `com.azure:azure-identity:1.14.2` (managed by Azure SDK BOM)
- **Spring Boot BOM**: `org.springframework.boot:spring-boot-dependencies:3.4.1` (for Spring-based projects)

### 1. {Pattern/Feature Category 1 - e.g., Configuration Management}

**Technical Overview:**
- **{Source Technology}**: {How the source technology handles this aspect}
- **{Target Technology}**: {How the target technology handles this aspect}
- **Migration Strategy**: {If no direct equivalent exists, specify the chosen alternative approach and rationale}

**Code Migration:**

*{Source Technology}:*
```{language}
// Example of how this pattern is implemented in the source technology
// Include comments explaining key concepts
```

*{Target Technology}:*
```{language}
// Example of how the same functionality is achieved in the target technology
// Include comments explaining the differences and rationale
```

### 1.1. Azure Security and Authentication (When TARGET_TECHNOLOGY is Azure-based)

**Technical Overview:**
- **Security Priority**: **When migrating to Azure services, prioritize Managed Identity authentication over connection strings, access keys, or certificates for enhanced security**
- **Azure Identity Integration**: Use Azure Identity client libraries that support automatic credential discovery and token management
- **Configuration Strategy**: Eliminate hardcoded credentials and implement environment-based authentication that works across development, staging, and production

**Authentication Migration Pattern:**

*Traditional Authentication (Connection Strings/Keys):*
```java
// AVOID: Hardcoded connection strings or access keys
String connectionString = "Endpoint=sb://myservice.servicebus.windows.net/;SharedAccessKeyName=...;SharedAccessKey=...";
ServiceBusClientBuilder builder = new ServiceBusClientBuilder()
    .connectionString(connectionString);
```

*Azure Managed Identity Authentication (Recommended):*
```java
// RECOMMENDED: Managed Identity with Azure Identity
import com.azure.identity.DefaultAzureCredentialBuilder;
import com.azure.core.credential.TokenCredential;

// Automatic credential discovery: Managed Identity -> Azure CLI -> Environment variables
TokenCredential credential = new DefaultAzureCredentialBuilder().build();

ServiceBusClientBuilder builder = new ServiceBusClientBuilder()
    .fullyQualifiedNamespace("myservice.servicebus.windows.net")
    .credential(credential);
```

**Required Dependencies for Azure Authentication:** *(Use latest compatible versions from compatibility matrix)*
- **Azure Identity library**: `com.azure:azure-identity:1.14.2` *(use latest compatible version for secure Managed Identity authentication)*
- **Azure SDK BOM**: `com.azure:azure-sdk-bom:1.2.28` *(use latest compatible version for consistent Azure library versions)*
- **Target Azure service**: `com.azure:azure-{service-name}:1.0.0` *(use latest compatible version for specific service client library)*
- **Remove connection string dependencies**: Eliminate any authentication-related libraries that use connection strings or access keys

**Environment-Specific Configuration:**
```yaml
# application.yml - No sensitive data in configuration files
azure:
  {service-name}:
    namespace: myservice.servicebus.windows.net  # Public endpoint, no secrets
    # Authentication handled automatically by DefaultAzureCredential
```

### 2. {Pattern/Feature Category 2 - e.g., Alternative Solution Required}

**Technical Overview:**
- **{Source Technology}**: {Source approach and characteristics}
- **{Target Technology}**: {Target approach and characteristics - may not exist}
- **Migration Strategy**: {Specific chosen alternative approach when no direct equivalent exists}

**Feature Gap Analysis:**
- **{Source Feature}**: {Description of source feature}
- **No Direct Equivalent**: {Target technology does not provide this feature}
- **Chosen Alternative**: {Specific alternative solution selected for migration}
- **Rationale**: {Why this alternative was chosen over other options}
- **Trade-offs**: {What functionality or characteristics are gained/lost}

**Code Migration:**

*{Source Technology}:*
```{language}
// Source technology implementation of feature X
// This feature has no direct equivalent in target technology
```

*{Target Technology} - Chosen Alternative:*
```{language}
// MIGRATION DECISION: Using [specific alternative approach] instead of direct mapping
// RATIONALE: [Why this alternative was chosen over other options]
// TRADE-OFFS: [What is gained/lost compared to original implementation]

// Implementation of the chosen alternative solution
// Include detailed comments explaining the alternative approach
```

**Alternative Options Considered:**
- **Option A**: {Brief description} - Rejected because: {reason}
- **Option B**: {Brief description} - Rejected because: {reason}
- **Chosen Option C**: {Brief description} - Selected because: {rationale}

### 3. {Pattern/Feature Category 3 - e.g., Complex Workaround Required}

**Technical Overview:**
- **{Source Technology}**: {Complex feature description and characteristics}
- **{Target Technology}**: {Limited or different capabilities}
- **Migration Strategy**: {Workaround approach and implementation strategy}

**Workaround Analysis:**
- **Functionality Coverage**: {What percentage/aspects of original functionality are preserved}
- **Performance Impact**: {Expected performance differences}
- **Maintenance Specifications**: {Additional complexity or maintenance overhead}
- **Future Migration Path**: {How this can be improved when target technology evolves}

**Code Migration:**

*{Source Technology}:*
```{language}
// Source technology advanced feature usage
// This requires a workaround in target technology
```

*{Target Technology} - Workaround Implementation:*
```{language}
// MIGRATION DECISION: Implementing workaround using [specific approach]
// RATIONALE: [Why this workaround approach was selected]
// LIMITATIONS: [What functionality cannot be replicated exactly]

// Detailed workaround implementation
// Include error handling and edge case management
```

### 4. {Pattern/Feature Category 4 - e.g., Architectural Refactoring}

**Technical Overview:**
- **{Source Technology}**: {Original architectural approach}
- **{Target Technology}**: {New architectural paradigm}
- **Migration Strategy**: {Refactoring approach to align with target technology best practices}

**Refactoring Analysis:**
- **Structural Changes**: {How the code organization changes}
- **Dependency Updates**: {New dependencies or framework changes required}
- **Benefits**: {Advantages gained through refactoring}
- **Risks**: {Potential issues during refactoring}

**Code Migration:**

*{Source Technology}:*
```{language}
// Source technology pattern that requires architectural refactoring
```

*{Target Technology} - Refactored Approach:*
```{language}
// MIGRATION DECISION: Refactoring to use [target technology paradigm]
// RATIONALE: [Why refactoring is preferred over direct translation]
// BENEFITS: [Advantages gained through refactoring]

// Refactored implementation following target technology best practices
```

**Refactoring Guidelines:**
- **Testing Strategy**: {How to validate the refactored implementation}
- **Rollback Specifications**: {How to revert if issues arise}
- **Performance Validation**: {How to ensure performance is maintained or improved}

### {Additional Patterns as Needed}

(Add more pattern categories as required for the specific migration scenario. Examples might include: Error Handling, Security Patterns, Performance Optimization, Integration Patterns, etc.)

### 99. {SOURCE_TECHNOLOGY} Removal and Cleanup Patterns

**Technical Overview:**
- **Complete Elimination Strategy**: Ensure all traces of {SOURCE_TECHNOLOGY} are removed to prevent conflicts, security vulnerabilities, and maintenance overhead
- **Cleanup Verification**: Implement systematic checks to verify complete removal of source technology components
- **Migration Completeness**: Validate that the application functions entirely with {TARGET_TECHNOLOGY} without fallback to source technology

**Dependency Removal Checklist:**

*Maven Build File Changes:*
```diff
 <dependencies>
-    <!-- Remove source technology dependencies -->
-    <dependency>
-        <groupId>{source.group.id}</groupId>
-        <artifactId>{source-artifact}</artifactId>
-        <version>{source.version}</version>
-    </dependency>
+    <!-- Add target technology dependencies -->
+    <dependency>
+        <groupId>{target.group.id}</groupId>
+        <artifactId>{target-core-artifact}</artifactId>
+        <!-- Version managed by BOM -->
+    </dependency>
 </dependencies>
```

*Gradle Build File Changes:*
```diff
 dependencies {
-    // Remove source technology dependencies
-    implementation '{source.group.id}:{source-artifact}:{source.version}'
+    // Add target technology dependencies
+    implementation libs.target.core
+    implementation libs.target.support
 }
```

**Code Cleanup Patterns:**

*Import Statement Changes:*
```diff
-// Remove all source technology imports
-import {source.package}.*;
-import {source.specific.Class};
+// Add target technology imports
+import {target.package}.*;
+import {target.specific.Class};
```

*Configuration File Changes:*
```diff
-# Remove source technology configuration
-{source-technology}:
-  connection-string: "..."
-  settings: "..."
+# Add target technology configuration
+{target-technology}:
+  namespace: "..."
+  settings: "..."
```

**Cleanup Verification Commands:**
```bash
# Search for remaining source technology references
grep -r "{SOURCE_TECHNOLOGY}" src/ --exclude-dir=target
grep -r "{source.package}" src/ --exclude-dir=target

# Verify no source technology in dependency files
grep "{source.group.id}" pom.xml build.gradle

# Check for resolved dependencies
# Maven
mvn dependency:tree | grep "{source.group.id}"

# Gradle
gradle dependencies | grep "{source.group.id}"
```

**Common Cleanup Oversights:**
- **Code Dependencies**: Remove {SOURCE_TECHNOLOGY} imports and API references
- **Configuration Files**: Clean up application.properties, application.yml
- **Documentation**: Update README.md, inline comments, and technical docs
- **Environment Variables**: Remove {SOURCE_TECHNOLOGY} related environment settings in configuration files
- **Monitoring/Logging**: Remove {SOURCE_TECHNOLOGY} specific monitoring configurations

## Reference Resources

(This section provides links to official documentation, tutorials, best practices guides, and other learning resources that will help developers during and after the migration.)

1. [{Target Technology} Official Documentation]({url})
2. [{Source} to {Target} Migration Guide]({url})
3. [{Target Technology} Best Practices]({url})
4. [{Target Technology} Performance Tuning Guide]({url})
5. [{Target Technology} Security Configuration]({url})
6. [{Target Technology} Monitoring and Operations]({url})
7. [Azure Identity and Authentication Best Practices](https://docs.microsoft.com/en-us/azure/developer/java/sdk/identity) *(When TARGET_TECHNOLOGY is Azure-based)*
8. [Azure SDK for Java BOM and Dependency Management](https://docs.microsoft.com/en-us/azure/developer/java/sdk/dependency-management) *(When TARGET_TECHNOLOGY is Azure-based)*
9. [Managed Identity Configuration Guide](https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/) *(When TARGET_TECHNOLOGY is Azure-based)*
10. [Community Resources and Forums]({url})
11. [Training and Certification Programs]({url})
12. [Sample Projects and Code Examples]({url})
13. [Troubleshooting and FAQ]({url})
