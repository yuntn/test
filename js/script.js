// a태그 새로고침 금지
const aTag = document.querySelectorAll('.sec3 a');
console.log(aTag);

for(let i=0; i<aTag.length; i++)
{
    aTag[i].setAttribute('href', 'javascript:return false;');
}

//헤더 드롭다운메뉴
const gnbList = document.querySelectorAll('.gnb > li');
const dropManu = document.querySelectorAll('.drop_menu');

for(let i=0; i<gnbList.length; i++)
{
    gnbList[i].addEventListener('mouseover', ()=>{
        dropManu[i].classList.add('showing');
    });
    gnbList[i].addEventListener('mouseout', ()=>{
        dropManu[i].classList.remove('showing');
    });
}

//sec1 슬라이더
const pager = document.querySelectorAll('.pager li');
const view = document.querySelector('.view');
let slideNumber = 0;
const play = document.querySelector('.play');
const stop = document.querySelector('.stop');
const sw = document.querySelectorAll('.switch button')

for(let i=0; i<pager.length; i++)
{
    pager[i].addEventListener('click', (e)=>{
        for(let j=0; j<pager.length; j++)
        {
            pager[j].classList.remove('on');
        }
        e.currentTarget.classList.add('on');
        slideNumber = e.currentTarget.getAttribute('data-index');
        view.style.marginLeft = -100 * slideNumber + '%';
    });
}

let auto = setInterval(() => {
    if(slideNumber == pager.length-1)
    {
        slideNumber = 0;
    }
    else
    {
        slideNumber++;
    }
    view.style.marginLeft = -100 * slideNumber + '%';
    for(let i=0; i<pager.length; i++)
    {
        pager[i].classList.remove('on');
    }
    pager[slideNumber].classList.add('on');
}, 4000);

stop.addEventListener('click', (e)=>{
    clearInterval(auto);
    for(let i=0; i<sw.length; i++)
    {
        sw[i].classList.remove('on');
    }
    e.currentTarget.classList.add('on');
});

play.addEventListener('click', (e)=>{
    auto = setInterval(() => {
        if(slideNumber == pager.length-1)
        {
            slideNumber = 0;
        }
        else
        {
            slideNumber++;
        }
        view.style.marginLeft = -100 * slideNumber + '%';
        for(let i=0; i<pager.length; i++)
        {
            pager[i].classList.remove('on');
        }
        pager[slideNumber].classList.add('on');
    }, 4000);
    for(let i=0; i<sw.length; i++)
    {
        sw[i].classList.remove('on');
    }
    e.currentTarget.classList.add('on');
});


//sec3 탭메뉴 다운매뉴
//탭메뉴
const tabBarList1 = document.querySelectorAll('.tab_bar li');
const tabContentList1 = document.querySelectorAll('.tabCont');

for(let i=0; i<tabBarList1.length; i++)
{
    tabBarList1[i].addEventListener('click', (e)=>{
        for(let j=0; j<tabBarList1.length; j++)
        {
            tabBarList1[j].classList.remove('on');
            tabContentList1[j].style.display = 'none';
        }
        e.currentTarget.classList.add('on');
        tabContentList1[i].style.display = 'block';
    });
}
//다운메뉴
const titleListH3 = document.querySelectorAll('.right_box .list h3')
const titleList = document.querySelectorAll('.right_box .list')

for(let i=0; i<titleList.length; i++)
{
    titleList[i].addEventListener('click', (e)=>{
        for(let j=0; j<titleList.length; j++)
        {
            titleList[j].classList.remove('on');
        }
        e.currentTarget.classList.add('on');
    });
}













