---
id: ant-project-to-maven-project
title: Migrate ant project to maven project
description: This KB provides guidelines for migrating ant project to maven project
---

# Migration Considerations: Ant to Maven

## Overview

This document provides specific migration considerations when migrating from Ant to Maven. Use these considerations with the INITIAL_PROMPT_TEMPLATE.md to create a project-specific migration plan.

## Key Components to Replace

-  Convert Ant build.xml to Maven pom.xml
-  Set up proper Maven project structure
-  Configure dependencies in pom.xml
-  Configure build plugins and compilation settings
-  Migrate custom Ant tasks to Maven plugin equivalents where possible

## Common Patterns to Migrate

### 1. Project Structure Mapping

**Ant Structure Patterns:**
- Often custom or non-standard directory layouts
- build.xml often in the project root
- lib/ directory with JAR files
- Properties files for different environments

**Maven Standard Structure:**
```
project-root/
├── pom.xml
├── src/
│   ├── main/
│   │   ├── java/        # Java source files
│   │   ├── resources/   # Non-Java resources
│   │   └── webapp/      # Web application resources (for WAR)
│   └── test/
│       ├── java/        # Test Java source files
│       └── resources/   # Test resources
└── target/              # Generated files (created by Maven)
```

### 2. Basic pom.xml Template

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
                             http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>project-name</artifactId>
    <version>1.0.0-SNAPSHOT</version>
    <packaging>jar</packaging> <!-- or war, ear, etc. -->

    <name>Project Name</name>
    <description>Description of the project</description>

    <properties>
        <maven.compiler.source>11</maven.compiler.source>
        <maven.compiler.target>11</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

    <dependencies>
        <!-- Dependencies mapped from lib/ directory -->
    </dependencies>

    <build>
        <plugins>
            <!-- Build plugins mapped from Ant tasks -->
        </plugins>
    </build>
</project>
```

### 3. Common Migration Mappings

#### Dependencies

**Ant:**
```xml
<path id="project.classpath">
    <fileset dir="lib">
        <include name="*.jar"/>
    </fileset>
    <pathelement location="lib/specific-library-1.0.jar"/>
</path>
```

**Maven:**
```xml
<dependencies>
    <dependency>
        <groupId>specific-group</groupId>
        <artifactId>specific-library</artifactId>
        <version>1.0</version>
    </dependency>
    <!-- More dependencies... -->
</dependencies>
```

#### Compilation

**Ant:**
```xml
<target name="compile">
    <mkdir dir="build/classes"/>
    <javac srcdir="src" destdir="build/classes" debug="true" includeantruntime="false">
        <classpath refid="project.classpath"/>
    </javac>
</target>
```

**Maven:**
```xml
<!-- This is handled by default in Maven, but can be customized: -->
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.11.0</version>
            <configuration>
                <source>11</source>
                <target>11</target>
                <debug>true</debug>
            </configuration>
        </plugin>
    </plugins>
</build>
```

#### Resources

**Ant:**
```xml
<target name="copy-resources">
    <copy todir="build/classes">
        <fileset dir="src">
            <exclude name="**/*.java"/>
        </fileset>
        <filterset>
            <filter token="VERSION" value="${version}"/>
        </filterset>
    </copy>
</target>
```

**Maven:**
```xml
<build>
    <resources>
        <resource>
            <directory>src/main/resources</directory>
            <filtering>true</filtering>
        </resource>
    </resources>
</build>
```

#### Testing

**Ant:**
```xml
<target name="test" depends="compile">
    <mkdir dir="build/test"/>
    <javac srcdir="test" destdir="build/test" includeantruntime="false">
        <classpath>
            <path refid="project.classpath"/>
            <pathelement location="build/classes"/>
        </classpath>
    </javac>
    <junit printsummary="yes" haltonfailure="yes">
        <classpath>
            <path refid="project.classpath"/>
            <pathelement location="build/classes"/>
            <pathelement location="build/test"/>
        </classpath>
        <formatter type="plain"/>
        <batchtest fork="yes" todir="build/test-results">
            <fileset dir="test">
                <include name="**/*Test*.java"/>
            </fileset>
        </batchtest>
    </junit>
</target>
```

**Maven:**
```xml
<dependencies>
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>4.13.2</version>
        <scope>test</scope>
    </dependency>
</dependencies>

<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-surefire-plugin</artifactId>
            <version>3.1.2</version>
            <configuration>
                <includes>
                    <include>**/*Test*.java</include>
                </includes>
            </configuration>
        </plugin>
    </plugins>
</build>
```

#### Packaging

Different packaging types in Maven correspond to different plugins and configuration files. When migrating from Ant, understanding which XML files can be deleted or need to be preserved is crucial.

##### JAR Packaging (maven-jar-plugin)

**Ant:**
```xml
<target name="jar" depends="compile">
    <mkdir dir="dist"/>
    <jar destfile="dist/${project.name}-${version}.jar" basedir="build/classes">
        <manifest>
            <attribute name="Main-Class" value="com.example.Main"/>
            <attribute name="Class-Path" value="lib/dependency1.jar lib/dependency2.jar"/>
        </manifest>
    </jar>
</target>
```

**Maven:**
```xml
<packaging>jar</packaging>

<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-jar-plugin</artifactId>
            <version>3.3.0</version>
            <configuration>
                <archive>
                    <manifest>
                        <addClasspath>true</addClasspath>
                        <classpathPrefix>lib/</classpathPrefix>
                        <mainClass>com.example.Main</mainClass>
                    </manifest>
                </archive>
            </configuration>
        </plugin>
    </plugins>
</build>
```

**Configuration Files:** JAR projects typically don't have special XML configuration files that need to be deleted. The manifest information is handled by the plugin configuration.

##### WAR Packaging (maven-war-plugin)

**Ant:**
```xml
<target name="war" depends="compile">
    <mkdir dir="dist"/>
    <war destfile="dist/${project.name}-${version}.war" webxml="src/web/WEB-INF/web.xml">
        <classes dir="build/classes"/>
        <fileset dir="src/web" excludes="WEB-INF/web.xml"/>
        <lib dir="lib"/>
    </war>
</target>
```

**Maven:**
```xml
<packaging>war</packaging>

<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-war-plugin</artifactId>
            <version>3.4.0</version>
            <configuration>
                <warSourceDirectory>src/main/webapp</warSourceDirectory>
                <webXml>src/main/webapp/WEB-INF/web.xml</webXml>
                <!-- Optional: Generate web.xml if it doesn't exist -->
                <!-- <failOnMissingWebXml>false</failOnMissingWebXml> -->
            </configuration>
        </plugin>
    </plugins>
</build>
```

**Configuration Files:**
- **web.xml**: Generally **KEEP** the original `web.xml` file. Maven doesn't auto-generate this file by default.
- Move `web.xml` to `src/main/webapp/WEB-INF/web.xml` (Maven standard location)
- Only delete the original if you're migrating to annotation-based configuration (Servlet 3.0+)

##### EAR Packaging (maven-ear-plugin)

**Ant:**
```xml
<target name="ear" depends="compile,war,jar">
    <mkdir dir="dist"/>
    <ear destfile="dist/${project.name}-${version}.ear" appxml="src/META-INF/application.xml">
        <fileset dir="dist" includes="*.jar,*.war"/>
        <metainf dir="src/META-INF"/>
    </ear>
</target>
```

**Maven:**
```xml
<packaging>ear</packaging>

<build>
    <finalName>ProjectName</finalName>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-ear-plugin</artifactId>
            <version>3.3.0</version>
            <configuration>
                <version>8</version> <!-- Java EE version -->
                <generateApplicationXml>true</generateApplicationXml>
                <displayName>Project Display Name</displayName>
                <description>Project Description</description>
                <modules>
                    <webModule>
                        <groupId>com.example</groupId>
                        <artifactId>web-module</artifactId>
                        <contextRoot>/webapp</contextRoot>
                    </webModule>
                    <ejbModule>
                        <groupId>com.example</groupId>
                        <artifactId>ejb-module</artifactId>
                    </ejbModule>
                    <jarModule>
                        <groupId>com.example</groupId>
                        <artifactId>jar-module</artifactId>
                    </jarModule>
                </modules>
                <!-- Use existing application.xml if needed -->
                <!-- <applicationXml>${basedir}/src/main/application/META-INF/application.xml</applicationXml> -->
            </configuration>
        </plugin>
    </plugins>
</build>
```

**Configuration Files:**
- **application.xml**: **CAREFUL MIGRATION REQUIRED**
  1. **DO NOT immediately delete** the original `application.xml`
  2. First build with `generateApplicationXml=true` and compare:
     - Original: `src/META-INF/application.xml`
     - Generated: `target/ProjectName/META-INF/application.xml`
  3. **Check for additional configurations** in the original:
     - Security roles and permissions
     - Custom context parameters
     - Library references (`<library-directory>`)
     - Resource references
     - Custom module configurations
     - Deployment descriptors
  4. **Only delete the original** after confirming all functionality is preserved
  5. If the original contains complex configurations, use:
     ```xml
     <generateApplicationXml>false</generateApplicationXml>
     <applicationXml>${basedir}/src/main/application/META-INF/application.xml</applicationXml>
     ```

##### EJB Packaging (maven-ejb-plugin)

**Ant:**
```xml
<target name="ejb" depends="compile">
    <mkdir dir="dist"/>
    <jar destfile="dist/${project.name}-${version}.jar">
        <fileset dir="build/classes"/>
        <metainf dir="src/META-INF" includes="ejb-jar.xml"/>
    </jar>
</target>
```

**Maven:**
```xml
<packaging>ejb</packaging>

<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-ejb-plugin</artifactId>
            <version>3.2.1</version>
            <configuration>
                <ejbVersion>3.2</ejbVersion>
                <!-- Optional: Custom ejb-jar.xml location -->
                <!-- <deploymentDescriptor>src/main/resources/META-INF/ejb-jar.xml</deploymentDescriptor> -->
            </configuration>
        </plugin>
    </plugins>
</build>
```

**Configuration Files:**
- **ejb-jar.xml**: Generally **KEEP** for EJB 2.x projects, **OPTIONAL** for EJB 3.x+ (annotation-based)
- Move to `src/main/resources/META-INF/ejb-jar.xml` (Maven standard location)
- Can be deleted if migrating to annotation-based EJB configuration

##### Summary: Maven Plugin vs Configuration Files

| Maven Plugin          | Packaging Type | XML Configuration Files | Action Required                                       |
|-----------------------|----------------|-------------------------|-------------------------------------------------------|
| `maven-jar-plugin`    | `jar`          | None (manifest only)    | No files to delete                                    |
| `maven-war-plugin`    | `war`          | `web.xml`               | **KEEP** - Move to `src/main/webapp/WEB-INF/`         |
| `maven-ear-plugin`    | `ear`          | `application.xml`       | **CAREFUL** - Compare before deleting                 |
| `maven-ejb-plugin`    | `ejb`          | `ejb-jar.xml`           | **OPTIONAL** - Keep for EJB 2.x, optional for 3.x+    |
| `maven-rar-plugin`    | `rar`          | `ra.xml`                | **KEEP** - Move to `src/main/rar/META-INF/`           |

**General Migration Rule:**
1. **Never immediately delete** configuration XML files
2. **Compare generated vs. original** files when plugins support auto-generation
3. **Move files to Maven standard locations** before testing
4. **Test thoroughly** before removing original files
5. **Consider annotation-based configuration** as an alternative to XML files

##### Critical: Artifact Name Changes and Reference Updates

When migrating from Ant to Maven, **artifact names often change**, which can break references in configuration files. This is particularly critical for EAR projects where `application.xml` references specific WAR/JAR files by name.

**Common Name Changes:**

| Build Tool | Typical Artifact Name      | Example                                                            |
|------------|----------------------------|--------------------------------------------------------------------|
| **Ant**    | Custom naming patterns     | `ProjectWeb.war`, `myapp-web.war`, `application.jar`               |
| **Maven**  | Standard naming convention | `project-web-1.0.0-SNAPSHOT.war`, `project-ejb-1.0.0-SNAPSHOT.jar` |

**Maven Naming Convention:** `{artifactId}-{version}.{packaging}`. It can be changed by ways like this:
    ```xml
    <build>
        <finalName>demo-ear</finalName>
    </build>
    ```

**Critical Files to Update:**

1. **application.xml** (in EAR projects):
    ```xml
    <!-- BEFORE (Ant naming) -->
    <module>
        <web>
            <web-uri>ProjectWeb.war</web-uri>
            <context-root>/myapp</context-root>
        </web>
    </module>
    <module>
        <ejb>ApplicationEJB.jar</ejb>
    </module>

    <!-- AFTER (Maven naming) -->
    <module>
        <web>
            <web-uri>project-web-1.0.0-SNAPSHOT.war</web-uri> <!-- Make sure this name is consistent with the real file name. -->
            <context-root>/myapp</context-root>
        </web>
    </module>
    <module>
        <ejb>project-ejb-1.0.0-SNAPSHOT.jar</ejb>  <!-- Make sure this name is consistent with the real file name. -->
    </module>

    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-ear-plugin</artifactId>
                <configuration>
                    <modules>
                        <webModule>
                            <groupId>demo</groupId>
                            <artifactId>demo-web</artifactId>
                            <bundleFileName>demo-web.war</bundleFileName>  <!-- Make sure this name is consistent with the real file name. -->
                            <contextRoot>DemoWeb</contextRoot>
                        </webModule>
                    </modules>
                </configuration>
            </plugin>
        </plugins>
    </build>
    ```

2. **Deployment Scripts** that reference artifact names
3. **Server Configuration Files** (e.g., server.xml, web.xml contexts)
4. **Build Scripts** and **CI/CD Pipelines**

**Solutions:**

**Option 1: Use Maven's finalName to maintain Ant naming**
```xml
<build>
    <finalName>ProjectWeb</finalName> <!-- Results in ProjectWeb.war -->
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-war-plugin</artifactId>
            <version>3.4.0</version>
        </plugin>
    </plugins>
</build>
```

**Option 2: Update all references to use Maven naming**
- Update `application.xml` with new artifact names
- Update deployment scripts and configurations
- This is the **recommended approach** for consistency

**Option 3: Use maven-ear-plugin with module configuration**
```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-ear-plugin</artifactId>
    <version>3.3.0</version>
    <configuration>
        <modules>
            <webModule>
                <groupId>com.example</groupId>
                <artifactId>project-web</artifactId>
                <bundleFileName>ProjectWeb.war</bundleFileName> <!-- Custom name -->
                <contextRoot>/myapp</contextRoot>
            </webModule>
            <ejbModule>
                <groupId>com.example</groupId>
                <artifactId>project-ejb</artifactId>
                <bundleFileName>ApplicationEJB.jar</bundleFileName> <!-- Custom name -->
            </ejbModule>
        </modules>
    </configuration>
</plugin>
```

**Migration Checklist:**
1. ✅ **Identify all artifact name references** in configuration files
2. ✅ **Choose naming strategy** (maintain old names vs. adopt Maven conventions)
3. ✅ **Update application.xml** and other configuration files accordingly
4. ✅ **Test deployment** to ensure all modules are correctly referenced
5. ✅ **Update CI/CD scripts** and deployment automation
6. ✅ **Document the naming changes** for the team

**⚠️ Warning:** Forgetting to update artifact name references is one of the most common causes of deployment failures after Ant to Maven migration.

#### Update .gitignore File

**⚠️ IMPORTANT: This is a critical step that must be included in your migration plan**

**Migration planning checklist**:
- ✅ Locate existing .gitignore file or create a new one
- ✅ Add maven related entries in .gitignore file

**Maven related .gitignore entries**:
   ```
   # Maven specific
   target/
   .mvn/wrapper/maven-wrapper.jar
   !**/src/main/**/target/
   !**/src/test/**/target/
   ```

### 4. Special Cases to Handle Carefully

#### Multi-module Projects

**Ant:**
- Often uses imports or includes
- Custom targets to build modules in order

**Maven:**
```xml
<!-- Parent pom.xml -->
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>parent-project</artifactId>
    <version>1.0.0-SNAPSHOT</version>
    <packaging>pom</packaging>

    <modules>
        <module>module1</module>
        <module>module2</module>
    </modules>

    <!-- Shared configuration -->
</project>

<!-- Each module has its own pom.xml -->
```

#### Custom Tasks

**Ant:**
```xml
<target name="custom-task">
    <taskdef name="custom" classname="com.example.CustomTask" classpathref="project.classpath"/>
    <custom parameter="value"/>
</target>
```

**Maven:**
```xml
<!-- Option 1: Find an equivalent Maven plugin -->
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>similar-plugin</artifactId>
    <version>1.0</version>
    <configuration>
        <parameter>value</parameter>
    </configuration>
</plugin>

<!-- Option 2: Use the Ant plugin for Maven -->
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-antrun-plugin</artifactId>
    <version>3.1.0</version>
    <executions>
        <execution>
            <phase>process-resources</phase>
            <goals>
                <goal>run</goal>
            </goals>
            <configuration>
                <target>
                    <taskdef name="custom" classname="com.example.CustomTask" classpathref="maven.plugin.classpath"/>
                    <custom parameter="value"/>
                </target>
            </configuration>
        </execution>
    </executions>
    <dependencies>
        <dependency>
            <groupId>com.example</groupId>
            <artifactId>custom-task</artifactId>
            <version>1.0</version>
        </dependency>
    </dependencies>
</plugin>
```

#### Environment-specific Configuration

**Ant:**
```xml
<property file="build.${env}.properties"/>

<target name="dev">
    <property name="env" value="dev"/>
</target>

<target name="prod">
    <property name="env" value="prod"/>
</target>
```

**Maven:**
```xml
<profiles>
    <profile>
        <id>dev</id>
        <activation>
            <activeByDefault>true</activeByDefault>
        </activation>
        <properties>
            <env>dev</env>
        </properties>
    </profile>
    <profile>
        <id>prod</id>
        <properties>
            <env>prod</env>
        </properties>
    </profile>
</profiles>

<build>
    <resources>
        <resource>
            <directory>src/main/resources</directory>
            <filtering>true</filtering>
        </resource>
        <resource>
            <directory>src/main/resources-${env}</directory>
            <filtering>true</filtering>
        </resource>
    </resources>
</build>
```

#### Non-Standard Directory Layouts

If the project doesn't follow Maven's standard directory layout, you have two options:

##### Option 1: Restructure the project (recommended for long-term maintenance)
- Move source files to src/main/java
- Move resources to src/main/resources
- Move test files to src/test/java

##### Option 2: Configure Maven to use the existing structure
```xml
<build>
    <sourceDirectory>src</sourceDirectory>
    <testSourceDirectory>test</testSourceDirectory>
    <resources>
        <resource>
            <directory>resources</directory>
        </resource>
    </resources>
    <testResources>
        <testResource>
            <directory>test-resources</directory>
        </testResource>
    </testResources>
</build>
```

#### Dependencies with Non-Standard Names

For JARs in the lib directory, you'll need to determine their Maven coordinates:

1. Look for metadata inside the JAR (MANIFEST.MF might contain version info)
2. Check if the JAR has a pom.xml inside META-INF
3. Search for the library on Maven Central: https://search.maven.org/
4. If the dependency isn't available in public repositories:
   - Consider using Maven's system scope (last resort)
   - Consider installing to a local or private repository

```xml
<!-- Option 1: From Maven Central -->
<dependency>
    <groupId>group.id</groupId>
    <artifactId>artifact-id</artifactId>
    <version>1.0.0</version>
</dependency>

<!-- Option 2: System scope (not recommended, but sometimes necessary) -->
<dependency>
    <groupId>custom.library</groupId>
    <artifactId>custom-name</artifactId>
    <version>1.0</version>
    <scope>system</scope>
    <systemPath>${project.basedir}/lib/custom-library.jar</systemPath>
</dependency>
```

#### File and Directory Movement Best Practices

When restructuring projects during Ant to Maven migration, follow these practices to ensure successful migration:

1. **⚠️ Important** Always use move operations instead of copy operations
   - **Use**: `mv`
   - **Avoid**: `cp`, `robocopy`, `xcopy`
   - **Reason**: Move operations ensure original files are automatically removed, preventing forgotten cleanup that can cause build conflicts and duplicate files

2. **⚠️ Important** Avoid moving parent folder to child folder
   - **Problem**: Moving a parent directory directly into its own subdirectory can cause infinite loops or file system errors
   - **Solution**: Rename the original folder first, then make sure maven related directories exist, then move file and direcory
   - **Example**: Instead of `mv src/* src/main/java/`, use `mv src src_temp && mkdir -p src/main/java && mv src_temp/* src/main/java/`
