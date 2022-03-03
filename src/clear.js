function clear(){
    const content = document.getElementById('content').childNodes;
    const [navbar, ...restContent] = content;
    restContent.forEach((item)=>{
        item.remove();
    })
}

export { clear };