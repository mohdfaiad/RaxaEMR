Ext.define('RaxaEmr.Pharmacy.view.stockIssue', {
    extend: 'Ext.container.Container',
    id: 'stockIssue',
    alias: 'widget.stockIssue',
    items:[{
        xtype: 'allStockPanel',
        x : 400
    },
    {
        xtype: 'stockIssueGrid',
        id: 'stockIssueGrid',
        x : 400
    }]
});