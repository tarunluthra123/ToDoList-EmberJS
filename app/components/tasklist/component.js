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
            let tasks = this.get('tasks')
            console.log('remove from ', tasks)
            const index = tasks.indexOf(taskName);
            if (index > -1) {
                tasks.splice(index, 1);
            }
            this.set('tasks', tasks.slice())
        }
    }
})