console.log("hello");

let input_1 = document.getElementById("conv_1");
let input_2 = document.getElementById("conv_2");
let val1 = document.getElementById("inp_1");
let val2 = document.getElementById("inp_2");
let button = document.getElementById("btn");
let reverse = document.getElementById("change");
// let btn = document.querySelector("btn");
// // console.log(btn.innerHTML)
// btn.addEventListener(onclick,()=>{
//     console.log("cl");
// })

reverse.addEventListener('click',()=>{
    // console.log("hiiiii")
    let temp = input_1.value;
    input_1.value = input_2.value;
    input_2.value = temp;
})


//INCH to convert
function inch_to_foot(inch)
{
    let foot = inch * 0.083333333;
    foot = foot.toFixed(2);
    // foot = Math.round(foot);
    return foot;
}
function inch_to_meter(inch)
{
    let meter = 0.0254 * inch;
    meter = meter.toFixed(2);
    return meter;
}
function inch_to_centi(inch)
{
    let centi = 2.54 * inch;
    centi = centi.toFixed(2);
    return centi;
}
function inch_to_mili(inch)
{
    let mili = 25.4 * inch;
    mili = mili.toFixed(2);
    return mili;
}


//FOOT to convert
function foot_to_inch(foot)
{
   let inch = foot / 0.083333333;
   inch = inch.toFixed(2);
    return inch;
}
function foot_to_meter(foot)
{
   let meter = foot * 0.3048;
   meter = meter.toFixed(2);
    return meter;
}
function foot_to_centi(foot)
{
    let centimeter = foot * 30.48;
    centi = centi.toFixed(2);
    return centimeter;
}
function foot_to_mili(foot)
{
    let milimeter = foot * 304.8;
    mili = mili.toFixed(2);
    return milimeter;
}


//METER to convert
function meter_to_centi(meter)
{
    let centimeter = meter * 100;
    // centimeter = centimeter.toPrecision(2);
    return centimeter;
}
function meter_to_mili(meter)
{
    let milimeter = meter * 1000;
    milimeter = milimeter.toFixed(2);
    return milimeter;
}
function meter_to_inch(meter)
{
    let inch = meter * 39.37;
    inch = inch.toFixed(2);
    return inch;
}
function meter_to_foot(meter)
{
    let foot = meter * 3.28;
    foot = foot.toFixed(2);
    return foot;
}

//CENTIMETER to convert
function centimeter_to_meter(centimeter)
{
    let meter = centimeter / 100;
    meter = meter.toFixed(2);
    return meter;
}
function centimeter_to_mili(centimeter)
{
    let milimeter = centimeter / 10;
    milimeter = milimeter.toFixed(2);
    return milimeter;
}
function centimeter_to_foot(centimeter)
{
    let foot = centimeter * 0.0328;
    foot = foot.toFixed(2);
    return foot;
}
function centimeter_to_inch(centimeter)
{
    let inch = centimeter / 0.3937;
    inch = inch.toFixed(2);
    return inch;
}


//MILI to convert
function milimeter_to_meter(milimeter)
{
    let meter = milimeter / 1000;
    meter = meter.toFixed(2);
    return meter;
}
function milimeter_to_centi(milimeter)
{
    let centimeter = milimeter / 10;
    centimeter = centimeter.toFixed(2);
    return centimeter;
}
function milimeter_to_inch(milimeter)
{
    let inch = milimeter / 0.03937;
    inch = inch.toFixed(2);
    return inch;
}
function milimeter_to_foot(milimeter)
{
    let foot = milimeter / 0.00328;
    foot = foot.toFixed(2);
    return foot;
}


//click event toshow output
function xyz()
{
    
    if(val1.value < 0)
    {
        alert("Enter a valid input");
    }
    else if(input_1.value === "INCH")
    {
        if(input_2.value === "FOOT")
        {
            val2.value = inch_to_foot(val1.value);
        }
        else if(input_2.value === "METER")
        {
            val2.value = inch_to_meter(val1.value);
        }
        else if(input_2.value === "CENTIMETER")
        {
            val2.value = inch_to_centi(val1.value);
        }
        else if(input_2.value === "MILIMETER")
        {
            val2.value = inch_to_mili(val1.value);
        }
    }
    else if(input_1.value === "FOOT")
    {
        if(input_2.value === "INCH")
        {
            val2.value = foot_to_inch(val1.value);
        }
        else if(input_2.value === "METER")
        {
            val2.value = foot_to_meter(val1.value);
        }
        else if(input_2.value === "CENTIMETER")
        {
            val2.value = foot_to_centi(val1.value);
        }
        else if(input_2.value === "MILIMETER")
        {
            val2.value = foot_to_mili(val1.value);
        }
    }
    else if(input_1.value === "METER")
    {
        if(input_2.value === "INCH")
        {
            val2.value = meter_to_inch(val1.value);
        }
        else if(input_2.value === "FOOT")
        {
            val2.value = meter_to_foot(val1.value);
        }
        else if(input_2.value === "CENTIMETER")
        {
            val2.value = meter_to_centi(val1.value);
        }
        else if(input_2.value === "MILIMETER")
        {
            val2.value = meter_to_mili(val1.value);
        }
    }
    else if(input_1.value === "CENTIMETER")
    {
        if(input_2.value === "INCH")
        {
            val2.value = centimeter_to_inch(val1.value);
        }
        else if(input_2.value === "FOOT")
        {
            val2.value = centimeter_to_foot(val1.value);
        }
        else if(input_2.value === "METER")
        {
            val2.value = centimeter_to_meter(val1.value);
        }
        else if(input_2.value === "MILIMETER")
        {
            val2.value = centimeter_to_mili(val1.value);
        }
    }
    else if(input_1.value === "MILIMETER")
    {
        if(input_2.value === "INCH")
        {
            val2.value = milimeter_to_inch(val1.value);
        }
        else if(input_2.value === "FOOT")
        {
            val2.value = milimeter_to_foot(val1.value);
        }
        else if(input_2.value === "METER")
        {
            val2.value = milimeter_to_meter(val1.value);
        }
        else if(input_2.value === "CENTIMETER")
        {
            val2.value = milimeter_to_centi(val1.value);
        }
    }

    // console.log("click");
    // console.log(input_1.value);
    // console.log(val1.value);
    // if(input_1.value === "INCH" && input_2.value === "FOOT")
    // {
    //     // val2.value = inch_to_foot(val1.value);
    //     // input_2.setAttribute("value",inch_to_foot(input_1.value));
    //     // console.log("hello");
    //     val2.value = inch_to_foot(val1.value);
    // }
    // else if(input_1.value === "INCH" && input_2.value === "METER")
    // {
    //     val2.value = foot_to_inch(val1.value);
    // }
    // else if(input_1.value === "INCH" && input_2.value === "CENTIMETER")
    // {
    //     val2.value = foot_to_inch(val1.value);
    // }
    // else if(input_1.value === "FOOT" && input_2.value === "INCH")
    // {
    //     val2.value = foot_to_inch(val1.value);
    // }
    // else if(input_1.value === "FOOT" && input_2.value === "INCH")
    // {
    //     val2.value = foot_to_inch(val1.value);
    // }
    // else if(input_1.value === "FOOT" && input_2.value === "INCH")
    // {
    //     val2.value = foot_to_inch(val1.value);
    // }
    // else if(input_1.value === "FOOT" && input_2.value === "INCH")
    // {
    //     val2.value = foot_to_inch(val1.value);
    // }
    // else if(input_1.value === "FOOT" && input_2.value === "INCH")
    // {
    //     val2.value = foot_to_inch(val1.value);
    // }
    // else if(input_1.value === "FOOT" && input_2.value === "INCH")
    // {
    //     val2.value = foot_to_inch(val1.value);
    // }
    // else if(input_1.value === "FOOT" && input_2.value === "INCH")
    // {
    //     val2.value = foot_to_inch(val1.value);
    // }
    // else if(input_1.value === "FOOT" && input_2.value === "INCH")
    // {
    //     val2.value = foot_to_inch(val1.value);
    // }
}


