/**
 * Tracking of page views.
 *
 * @author  L. Daniel Nordstrom <d@mrnordstrom.com>
 * @license MPL 2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

;(function (window, undefined) {
  'use strict'

  /**
   * Add newlines at colons in article titles.
   *
   * @method
   */
  function initialize() {
    var titles = document.querySelectorAll('.article-title')

    Array.prototype.forEach.call(titles, function (node) {
      node.innerHTML = node.innerHTML.replace(': ', ':<br>')
    })

    return;

    if (!mixpanel || navigator.doNotTrack === 'yes') return

    var path = location.pathname
    var titleNode = document.querySelector('.article-title')
    var title = 'Home Page'

    if (titleNode) title = titleNode.textContent

    mixpanel.track('Page View', { title: title, path: path })

    console.log(
      'Mr. Nordstrom announcement: ' +
      'This page view was tracked modestly using Mixpanel ' +
      '(http://mixpanel.com) for statistical purposes. ' +
      'You may enable "Do Not Track" in your browser to prevent this.'
    )
  }

  if (document.readyState === 'complete') {
    initialize();
  } else {
    document.addEventListener('DOMContentLoaded', initialize, false);
  }
}(window));
