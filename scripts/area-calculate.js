function calculateTriangleArea() {
    // get triangle base value
    const baseField = document.getElementById('triangle-base')
    const baseValueText = baseField.value;
    const baseTriangle = parseFloat(baseValueText);


    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightFieldValue = heightField.value;
    const heightTriangle = parseFloat(heightFieldValue);

    // calculation
    const triangleArea = 0.5 * baseTriangle * heightTriangle;
    const triangleAreaTwoDecimal = triangleArea.toFixed(2);

    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = triangleAreaTwoDecimal;

    // add to calculation entry
    addToCalculationEntry('Triangle', triangleAreaTwoDecimal )

}

function calculateRectangleArea() {

    // get Rectangle width value
    const widthField = document.getElementById('rectangle-width')
    const widthFieldValue = widthField.value;
    const rectangleWidth = parseFloat(widthFieldValue);
    // console.log(rectangleWidth);

    // get Rectangle length value
    const lengthField = document.getElementById('rectangle-length');
    const lengthFieldValue = lengthField.value;
    const rectangleLength = parseFloat(lengthFieldValue);
    // console.log(rectangleLength);

    // validate width and length input field
    if (isNaN(rectangleWidth) || isNaN(rectangleLength)) {
        alert('please insert a number')
        return;
    }

    // calculation
    const rectangleArea = rectangleWidth * rectangleLength;

    // show result
    const rectangleResult = document.getElementById('rectangle-area');
    rectangleResult.innerText = rectangleArea

    // add to calculation entry
    addToCalculationEntry('Rectangle', rectangleArea)

    // console.log(rectangleResult);

}



function calculateParallelogramArea() {

    const parallelogramBase = getInputValueById('parallelogram-base');
    const parallelogramHeight = getInputValueById('parallelogram-height');

    // validate
    if (isNaN(parallelogramBase) || isNaN(parallelogramHeight)) {
        alert('please insert a number')
        return;
    }

    const parallelogramArea = parallelogramBase * parallelogramHeight;

    // set area field value by function

    setAreaFieldValue('parallelogram-area', parallelogramArea)

    // add to calculation entry
    addToCalculationEntry('Parallelogram', parallelogramArea)


    // console.log(parallelogramArea);
}

// reusable get input value field in number

function getInputValueById(inputID) {
    const parallelogramBaseField = document.getElementById(inputID);
    const parallelogramBaseText = parallelogramBaseField.value;
    const parallelogramBaseNumber = parseFloat(parallelogramBaseText);
    return parallelogramBaseNumber;
}

// set area field value by function
function setAreaFieldValue(inputID, newValue) {
    const areaFieldValue = document.getElementById(inputID);
    areaFieldValue.innerText = newValue;
}

function calculateEllipseArea() {
    const majorRadius = getInputValueById('ellipse-x');
    const minorRadius = getInputValueById('ellipse-y');
    const ellipseArea = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = ellipseArea.toFixed(2);

    setAreaFieldValue('ellipse-area', areaTwoDecimal)
    // add to calculation entry
    addToCalculationEntry('Ellipse', areaTwoDecimal)
}

// add to calculation entry (log)
/**
 *1. get the element where you want to add the dynamic HTML
 *2. create an element you want to add
 *3. if needed add some class
 4. set inner HTML. it could be dynamic Template string
 5. append the created element as a child of the parent
*/
function addToCalculationEntry(areaType, area) {
    console.log(areaType + ' ' + area)
    const calculationEntry = document.getElementById('calculation-entry')

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    // p.innerHTML = areaType + ' ' + area;
    p.classList.add('my-4')
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class ="btn btn-success btn-sm" >Convert</button>`;

    calculationEntry.appendChild(p);
}


// Data validation
/*
1. set the proper type of the input field (number, data, email, text).
2. check typeof input field
3. isNan (Not a Number) checking by input field. 
*/