let employees = [
    {name: "Lia", hourlyRate: 23, hoursWorked: 30},
    {name: "Jaden", hourlyRate: 25, hoursWorked: 50}, 
    {name: "Evan", hourlyRate: 18, hoursWorked: 20},
    {name: "Alex", hourlyRate: 20, hoursWorked: 45},
];

const MAX_HOURS = 40;

function calculateBasePay(rate, hours) {
    let baseHours;
    if (hours > MAX_HOURS) {
        baseHours = MAX_HOURS;
    }    
        else {
            baseHours = hours;
        }
    return rate * baseHours;
}

function calculateOvertimePay(rate, hours) {
    if (hours > MAX_HOURS) {
        let overtimeHours = hours - MAX_HOURS;
        return overtimeHours * rate * 1.5;
    } else {
        return 0;
    }
}

function calculateTaxes(grossPay) {
    return grossPay * .15;
}

function processPayroll(employee) {
    let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    let overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    let grossPay = basePay + overtimePay;
    let taxes = calculateTaxes(grossPay);
    let netPay = grossPay - taxes;
    return {
        "Name": employee.name,
        "Base Pay": basePay,
        "Overtime Pay": overtimePay,
        "Gross Income": grossPay,
        "Net Income": netPay
    }

}

employees.forEach(employee => {
    const payrollReport = processPayroll(employee);
    console.log(payrollReport);});