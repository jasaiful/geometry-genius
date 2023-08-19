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

    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = triangleArea;

    console.log(triangleArea);

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




