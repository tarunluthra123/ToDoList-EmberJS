import Component from '@ember/component';

export default Component.extend({
    actions: {
        addTask: function () {
            // console.log('abc=', this.get('newTask'))
            let newTask = this.get('newTask')
            let currentTasks = this.tasks
            currentTasks.push(newTask)
            // this.tasks = currentTasks
            this.set('tasks', currentTasks.slice())
        },
        clearAll: function () {
            this.set('tasks', [])
        },
        sortTasks: function () {
            this.set('tasks', this.get('tasks').sort().slice())
        }
    }
})