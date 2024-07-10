#!/usr/bin/env Node

const { exec } = require("child_process");

function cloneRepo(repoUrl, projectName) {
  const command = `git clone ${repoUrl} ./${projectName}/`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Clone error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`Git message: ${stderr}`);
    }
    console.log(`Repo OK: ${projectName}`);
    console.log(stdout);
  });
}

const args = process.argv.slice(2);

if (args.length < 1) {
  console.error("Use: npx create-classyjs-app <your-project-name>");
  process.exit(1);
} else if (args[0] === "--help") {
  console.log("Use: npx create-classyjs-app <your-project-name>");
} else {
  const repoUrl = "https://github.com/slydragonn/classyjs-app.git";
  const localPath = args[0];

  cloneRepo(repoUrl, localPath);
}
