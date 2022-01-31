var contextMenuItem ={
    "id": "outline",
    "title": "Read in Outline", 
    "contexts": ['page'],  
}

async function getTab() {
    let queryOptions = { active: true, currentWindow: true };
    let tabs = await chrome.tabs.query(queryOptions);
    return await tabs[0].url;
}

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(async function(info) {
    if (info.menuItemId === "outline"){
        let url = await getTab()
        chrome.tabs.update({ url: "https://outline.com/" + url})
    }
});