import Component from '@ember/component';

export default Component.extend({
    init() {
        this._super(...arguments)
        let t = ['first task', 'another task', 'third task']
        this.set('tasks', t)
    }
})
