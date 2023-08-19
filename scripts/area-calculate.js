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
}

function calculateRectangleArea() {

    // get Rectangle width value
    const widthField = document.getElementById('rectangle-width')
    const widthFieldValue = widthField.value;
    const rectangleWidth = parseFloat(widthFieldValue);

    // get Rectangle length value
    const lengthField = document.getElementById('rectangle-length');
    const lengthFieldValue = lengthField.value;
    const rectangleLength = parseFloat(lengthFieldValue);

    // calculation
    const rectangleArea = rectangleWidth * rectangleLength;

    // show result
    const rectangleResult = document.getElementById('rectangle-area');
    rectangleResult.innerText = rectangleArea

    console.log(rectangleResult);

}



function calculateParallelogramArea() {

    const parallelogramBase = getInputValueById('parallelogram-base');
    const parallelogramHeight = getInputValueById('parallelogram-height');

    const parallelogramArea = parallelogramBase * parallelogramHeight;

    // set area field value by function

    setAreaFieldValue('parallelogram-area', parallelogramArea)

    console.log(parallelogramArea);
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
}