#Installing and running html reporter mochawesome

1. Install mochawesome by typing npm install mochawesome --save-dev into the terminal
2. Install mochawesome-merge by typing npm install mochawesome-merge --save-dev into the terminal (if you need to merge the generated reports)
3. Install mochawesome-report-generator by typing npm install mochawesome-report-generator --save-dev into the terminal
4. Check package.json if all the dependencises are installed.
5. Go to cypress.config.js file and add:
    reporter: 'mochawesome',
    reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false, // Do not overwrite existing reports
    html: true,
    json: true,(this property value is set to true in order to generate json reports)
The above should be added in the defineConfig and outside the e2e object.
6. Run cypress headless with the command npx cypress run in the terminal. This should create reports folder with the html and json reports inside.(the directory can be changed from the reportDir property) Each test set represent separate html/json file.
7. Merging the files in to one report (Optional) - in order to merge all files into one report, you should have genarated json reports (html can't be merged directly), merge them by typing this command npx mochawesome-merge *.json > merged-report.json (hint - make sure that you are in the json reports directory.
8. Convert the merged .json report to .html by typing this command npx marge merged-report.json --reportDir cypress/reports(this is the directory where the html report will be generated) --inline
