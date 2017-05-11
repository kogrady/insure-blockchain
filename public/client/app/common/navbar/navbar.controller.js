class NavbarController {

  constructor($state) {
    this.$state = $state;
  }

  /**
   * Author: Stephan McLean
   * Date: 11th May 2017
   *
   * Returns true if the current state matches the name passed in.
   */
  isActive(stateName) {
    return this.$state.current.name === stateName;
  }

}

NavbarController.$inject = ['$state'];

export default NavbarController;
