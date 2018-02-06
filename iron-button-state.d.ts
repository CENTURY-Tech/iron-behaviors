/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   iron-button-state.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />
/// <reference path="../iron-a11y-keys-behavior/iron-a11y-keys-behavior.d.ts" />
/// <reference path="iron-control-state.d.ts" />

declare namespace Polymer {

  interface IronButtonState extends Polymer.IronA11yKeysBehavior {
    keyBindings: object|null;

    /**
     * If true, the user is currently holding down the button.
     */
    readonly pressed: boolean|null|undefined;

    /**
     * If true, the button toggles the active state with each tap or press
     * of the spacebar.
     */
    toggles: boolean|null|undefined;

    /**
     * If true, the button is a toggle and is currently in the active state.
     */
    active: boolean|null|undefined;

    /**
     * True if the element is currently being pressed by a "pointer," which
     * is loosely defined as mouse or touch input (but specifically excluding
     * keyboard input).
     */
    readonly pointerDown: boolean|null|undefined;

    /**
     * True if the input device that caused the element to receive focus
     * was a keyboard.
     */
    readonly receivedFocusFromKeyboard: boolean|null|undefined;

    /**
     * The aria attribute to be set if the button is a toggle and in the
     * active state.
     */
    ariaActiveAttribute: string|null|undefined;
    _mouseEventRe: RegExp|null;
    _tapHandler(): any;
    _focusChanged(focused: any): any;
    _detectKeyboardFocus(focused: any): any;

    /**
     * 'change' events
     */
    _userActivate(active: any): any;
    _downHandler(event: any): any;
    _upHandler(): any;

    /**
     * @param event .
     */
    _spaceKeyDownHandler(event: KeyboardEvent): any;

    /**
     * @param event .
     */
    _spaceKeyUpHandler(event: KeyboardEvent): any;

    /**
     * event handler to unwind before triggering another event
     */
    _asyncClick(): any;
    _pressedChanged(pressed: any): any;
    _ariaActiveAttributeChanged(value: any, oldValue: any): any;
    _activeChanged(active: any, ariaActiveAttribute: any): any;
    _controlStateChanged(): any;
    _changedButtonState(): any;
  }

  const IronButtonState: object;
}