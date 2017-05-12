import _ from 'underscore';

class NavigationController {

  constructor($state) {
    this.$state = $state;

    /**
     * Set up the steps to show.
     */
    this.steps = _.filter(this.$state.get(), (state) => {
      return state.parent === 'wizard';
    });

  }

  isCurrentStep(step) {
    return step.name === this.$state.current.name;
  }

  canVisitStep(step) {
    return step.index < this.$state.current.index;
  }

}

NavigationController.$inject = ['$state'];

export default NavigationController;
