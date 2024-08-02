// Data for a single To-Do item.

// Here I break types down for each property.
export type Task = string
export type DueDate = string
export type Status = string // 'incomplete' | 'complete'

// Complete type for exernal use.
export type TodoType = {
    complete?: () => void;
    dueDate: DueDate;
    status: Status;
    setStatus?: (status: Status) => void;
    task: Task;
    unComplete?: () => void;
}

export default class Todo {
    task: Task
    dueDate: DueDate
    status: Status
    constructor(task: Task, dueDate: DueDate){
        this.task = task
        this.dueDate = dueDate
        this.status = 'incomplete'
    }

    //-- status methods
    setStatus(status: Status){
        this.status = status
    }

    // convenience method for status complete
    complete (){
        this.setStatus('complete')
    }

    // convenience method for undoing a completion.
    unComplete (){
        this.setStatus('incomplete')
    }
}