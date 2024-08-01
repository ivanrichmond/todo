// Data for a single To-Do item.

// Here I break types down for each property.
export type Task = string
export type DueDate = Date
export type Status = 'incomplete' | 'complete'

// Complete type for exernal use.
export type TodoType = {
    complete: () => void;
    dueDate: DueDate;
    status: Status;
    task: Task;
}


export default class Todo {
    task: string
    dueDate: Date
    status: 'incomplete' | 'complete'
    constructor(task: string, dueDate: Date){
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