# Clasp

## Overview

Here we define some sheet apps script files and their purpose. This is a simple structure for a Google Apps Script project using Clasp.

```
📦scripts
┣ 📜.clasp.json // Links your local project to the Apps Script project
┣ 📜appsscript.json // Defines metadata, access, and web app settings
┗ 📜main.js // Contains all your logic (doGet, doPost, onEdit, etc.)
```

Absolutely — here’s the correct **workflow using `clasp`** to make sure your latest code (e.g. with `doPost`) is deployed properly as a web app:

---

### ✅ **1. Push local code to Apps Script**

```bash
clasp push
```

This uploads your local `main.js` (and other files like `appsscript.json`) to the Apps Script project.

---

### ✅ **2. Create a new deployment**

You need to create a **new version** and deploy it:

```bash
clasp deploy --description "Deploy doPost web app"
```

> ⚠️ This will return a **deployment ID** and a **web app URL** — copy that URL and use it for testing.

---

### ✅ **3. Use the correct web app URL**

Once deployed, the correct **public URL** will look like:

```
https://script.google.com/macros/s/<DEPLOYMENT_ID>/exec
```

Use that for your POST/GET requests.

---

### ✅ (Optional) **List all deployments**

If you want to check existing versions:

```bash
clasp deployments
```

---

### ✅ (Optional) **Delete old deployments**

If your script is picking up an outdated version:

```bash
clasp undeploy <deploymentId>
```

---

### 🚀 Summary: Full Working Command Sequence

```bash
clasp push
clasp deploy --description "Updated web app with doPost"
```

Then copy the returned `https://script.google.com/.../exec` and test your POST again.
