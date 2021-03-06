# Google App Script as Content Management System

This is a very simple starter website (front-end folder) and app (back-end-script folder) to be able to use Google App Script as a back-end CMS for a simple front-end site. It allows for the site content to be edited via Google spreadsheets and contact form submissions to be sent to a separate Google spreadsheet as well as emailed to client. This is a very simple but a working solution if the site you are building does not contain a lot of (secure) data, your client is not very tech savvy and cost needs to be taken into account. 

## How to use it

#### Front End:

*See [Front End Page](https://google-app-script-as-cms.netlify.com/) here.*

You can use any front-end site. This example includes a simple HTML/CSS/JS page but any front-end framework will work as well. Simply connect to your App Script via Ajax call. 

#### Back End:

*Note: You will need a Google account for this app.*

##### Create Spreadsheets:
Create new spreadsheets in your Google Drive. This example uses two separate spreadsheets: one to store the site content and the other to store contact form submissions. 

Spreadsheet 1 with site content:

ContainerId | ContainerPosition | Title | Content | List 
 --- | --- | --- | --- | --- 
content1 | left | Title One | Content goes here | List, Items, Here
content2 | right | Title One | Content goes here | List, Items, Here

ContainerId corresponds to the content location on the HTML page:
```
   <div class="row">
      <!-- left column -->
      <div class="col-md-6 blue section-padding" id="content1">
        <!-- append left content here -->
      </div>
      <! -- right column -->
      <div class="col-md-6 gray section-padding" id="content2">
        <!-- append right content here -->
      </div>
    </div>
```

Spreadsheet 2 for form submissions:

Timestamp | Name | Email | Message 
--- | --- | --- | --- 
 1/7/2019 13:33:35 | Jane | jane@test.com | Message will appear here
 
##### Create App Script:
*I'm working on being able to just clone the directory to your new script project.*

Go to [Google App Script](https://script.google.com) and create a new script.

Right click on Code.gs and rename it to any of the files listed in this back-end repo. Add new files (File -> New -> Script file) until you have all the files that are included in this backend repo. Copy the code included in each file to corresponding file in your App Script. Add your corresponding spreadsheet IDs to Config.gs. You will find them in the URL of your spreadsheet: `https://docs.google.com/spreadsheets/d/{ spreadsheet ID }/`. 

```javascript
function Config() {
  getSpreadsheetId =  "{  spreadsheetID }";
  getSpreadsheet = SpreadsheetApp.openById(getSpreadsheetId);
  
  return {
    getSpreadsheetId: getSpreadsheetId,
    getSpreadsheet: getSpreadsheet
  }
}
``` 

Once your code is completed, Publish -> Deploy as web app (repeat this every time after you make changes to your code). Make sure to allow ‘Anyone, even anonymous’ access to your app. Copy the provided app URL to your Ajax call in the front-end. 

### Github support:

If you want to commit your code to Github from Google App Script, you can add the [Chrome extension for GitHub Assistant](https://chrome.google.com/webstore/detail/google-apps-script-github/lfjcgcmkmjjlieihflfhjopckgpelofo?hl=en) to your browser. 


## Future improvements:

- Make entire site content available to edit via App Script.
- Make use of Clasp to be able to use app script locally.
- Clone just the back-end repo via Github Assistant. Currently it will pull the entire repo.
- How to pull the folder content only?


