/**
 * @description       : SLDS Scoped Notification Generic Component
 * @group             : Generic Components
 * @author            : samuel@pipelaunch.com
 * @last modified on  : 22-08-2022
 * @last modified by  : samuel@pipelaunch.com
 * @changelog         : 21-07-2022 - Initial version
 **/
import { LightningElement, api } from "lwc";

import * as utils from "./lwcScopedNotificationUtils";

export default class LwcScopedNotification extends LightningElement {
  @api message = "";
  @api link = null;
  @api linkMessage = null;
  @api target = "_self"; // _blank
  @api buttonAction = null; // function

  /**
   * @description type of the state. Valid values are: base, informational, success, warning, error
   * @default "base"
   */
  @api
  get type() {
    return this._type;
  }
  _type = "base";
  set type(value) {
    this._type = utils.validateType(value);
  }

  /**
   * @type {String}
   */
  get computeIconName() {
    return utils.computeIconName(this._type);
  }

  /**
   * @type {String}
   */
  get computeIconAlternativeText() {
    return utils.computeIconAlternativeText(this._type);
  }

  /**
   * @type {String}
   */
  get computeClasses() {
    return utils.computeClasses(this._type);
  }

  /**
   * @type {String}
   */
  get computeIconVariant() {
    return utils.computeIconVariant(this._type);
  }

  /**
   * @description handle slot content change
   * @param {*} evt 
   */
  handleSlotChange(evt) {
    this._hasSlot = utils.hasSlotContent(evt);
  }

  /**
   * @description execute a function if user clicks on the link
   */
  handleClickButton(evt) {
    if (typeof this.buttonAction === "function") {
      evt.preventDefault(); // don't follow link
      this.buttonAction();
    }
  }

}
