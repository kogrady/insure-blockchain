class ActionButtonsController {

  constructor($state) {
    this.$state = $state;
  }

  canGoToNext() {
    return this.$state.current.next;
  }

  goToNext() {
    this.$state.go(this.$state.current.next);
  }

}

ActionButtonsController.$inject = ['$state'];

export default ActionButtonsController;
