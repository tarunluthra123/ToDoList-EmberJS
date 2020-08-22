import Component from '@ember/component';

export default Component.extend({
    didReceiveAttrs() {
        let tasks = this.tasks
        console.log(this)
        this.set('tasks', tasks)
    },
    // tasks: this.tasks,
    actions: {
        removeTask(taskName) {
            console.log('removetask ' + taskName)

        }
    }
})