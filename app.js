let theme = localStorage.getItem('theme')


if(theme == null){
    setTheme('purple')
}else{
    setTheme(theme)

}


let themeDots = document.getElementsByClassName('theme-dot')

for(var i=0; themeDots.length>i; i++){
    themeDots[i].addEventListener('click', function(){
           let mode = this.dataset.mode
           console.log('Option clicked:', mode)

            setTheme(mode)
    })
}


function setTheme(mode){
    if(mode =='light'){
        document.getElementById('theme_style').href = 'default.css'
    }
    if(mode =='blue'){
        document.getElementById('theme_style').href = 'themes/blue.css'
    }
    if(mode =='green'){
        document.getElementById('theme_style').href = 'themes/green.css'
    }
    if(mode =='purple'){
        document.getElementById('theme_style').href = 'themes/purple.css'
    }
    localStorage.setItem('theme', mode)
}