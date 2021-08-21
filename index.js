let employee = {
    name: '',
    streetAddress: '',
}



function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newObject = Object.assign({}, employee)   
    // const newObj = { ...employee };
    newObject[key] = value
    return newObject
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign(employee, { [key]: value })
}

function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign({}, employee)
    delete newObject[key]
    return newObject
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
 }