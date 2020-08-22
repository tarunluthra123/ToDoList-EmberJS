import Component from '@ember/component';

export default Component.extend({
    actions: {
        addTask: function (arg) {
            let newTask = 'some task'
            console.log(arg)
            console.log(this.tasks)
            console.log(this)
            let currentTasks = this.tasks
            currentTasks.push(newTask)
            // this.tasks = currentTasks
            this.set('tasks', currentTasks.slice())
        },
        clearAll: function () {
            this.tasks.length = 0;
        }
    }
})