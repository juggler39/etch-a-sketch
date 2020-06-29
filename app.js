let mainDiv=document.createElement ('div');
mainDiv.id='flex-container';
document.body.appendChild(mainDiv);
for (let y=0;y<16;y++) {
    for (let x=0;x<16;x++) {
        let innerDiv=document.createElement ('div');
        innerDiv.id=`x${x}y${y}`;
        mainDiv.appendChild(innerDiv);
        innerDiv.innerHTML=x;
    }
}