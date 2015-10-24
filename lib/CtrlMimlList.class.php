<?php

class CtrlMimlList extends CtrlMimlAbstract {

  protected function init() {
    Sflm::frontend('css')->addFolder(dirname(__DIR__).'/miml/css');
  }

  // list =)
  function action_default() {
  }

}