render();

function render() {
    let pole = document.getElementById('pole');

    for (var i = 0; i < 25; i++)
    {
        let Row = document.createElement('row');
        Row.className = "row";
        
        for (var j = 0; j < 60; j++)
        {
            let Col = pole.appendChild(Row);
            let button = document.createElement('div');
            button.className = "button";
            Col.appendChild(button);
            button.id = i * 60 + j ;
            button.textContent = Math.floor(Math.random() * (3 - 1 + 1)) + 1; /*Math.floor(Math.random() * (max - min + 1)) + min; - целое*/
            
            button.addEventListener('click', btnClick);
        }
    }
}

 color = {
    1: "#B2EC5D",
    2: "#3CA1D3",
    3: "#EA5759"
};

function btnClick() {
    let btn_Id = Number(this.id);
    let btn_Text = Number(this.textContent);

    document.getElementById(btn_Id).style.backgroundColor = color[btn_Text];

    for(let i = -btn_Text; i <= btn_Text; i++)
    {
        if(Math.abs(i) == btn_Text)
        {
            for(let j = -btn_Text; j <= btn_Text; j++)
            {
                let strip = btn_Id + i * 60 + j;
                ColorObj(btn_Text, strip);
            }
        }
        else
        {
            for (let k = -1; k <= 1; k += 2)
            {
                let column = btn_Id + i * 60 + k * btn_Text;
                ColorObj(btn_Text, column);
            }
        }
    }
    
}

function ColorObj (btn_Text, strip) {
    
    let Color = color[btn_Text];

    try 
    {
        document.getElementById(strip).style.backgroundColor = Color;
    }
    catch (error) {}
};
