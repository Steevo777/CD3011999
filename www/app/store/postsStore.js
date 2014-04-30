/*
 * File: app/store/postsStore.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ChatDawg.store.postsStore', {
    extend: 'Ext.data.Store',

    requires: [
        'ChatDawg.model.postsModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'ChatDawg.model.postsModel',
            storeId: 'postsStore',
            proxy: {
                type: 'ajax',
                filterParam: 'type=\'F\'',
                url: 'http://www.a-information.com/chatdawg/fullposts.php',
                reader: {
                    type: 'json'
                }
            }
        }, cfg)]);
    }
});