<?php

abstract class CtrlMimlAbstract extends CtrlBase {

    protected function afterAction() {
        Arr::checkEmpty($this->d, ['pageTitle', 'pageHeadTitle']);
    }

}