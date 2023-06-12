export interface Employee {
    empId: number;
    empName: string;
    empEmail: string;
    empMobile: number;
    empSalary: number;
    department?: string; 
    empDeptId: number;
}  

export interface UpdateEmployee {
    empId: number;
    employee: Employee;
}