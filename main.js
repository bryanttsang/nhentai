chrome.contextMenus.create({
    id: 'nhentai',
    title: 'g/%s',
    contexts: ['selection']
})

function onClick(info, tab) {
    const { menuItemId, selectionText } = info
    switch (menuItemId) {
        case 'nhentai':
            if (/^\d+$/.test(selectionText))
                chrome.tabs.create({ url: 'https://nhentai.net/g/' + selectionText })
            break
    
        default:
            break
    }
}

chrome.contextMenus.onClicked.addListener(onClick)
