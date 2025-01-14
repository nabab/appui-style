<bbn-table :source="source.data"
           editable="nobuttons"      
           :info="true"
           :filterable="true"
           :sortable="true"
           :order="[{field: 'name', dir: 'ASC'}]"
           :toolbar="[{
              text: '<?= _('Save') ?>',
              action: save,
              icon: 'nf nf-fa-save'
           }]"
           
>
   <bbns-column field="name"
                label="<?_('Name')?>"
                :editable="false"
                width="130"
  ></bbns-column>

  <bbns-column field="kendo"
               label="<?= _('Kendo free') ?>"
               width="95"
               type="boolean"
               :render="renderKendo"
               cls="bbn-c bbn-medium"
               :componentOptions="{
                 novalue: false
               }"
  ></bbns-column>
  
  <bbns-column field="state"
               label="<?= _('State') ?>"
               cls="bbn-c"
               width="60"
               :render="renderState" 
               :source="states"
  ></bbns-column>

  <bbns-column field="priority"
               label="<?= _('Priority') ?>"
               :source="priorities"
               cls="bbn-c bbn-b"
               width="60"
  ></bbns-column>

  <bbns-column field="issues"
               label="<?= _('Issues') ?>"
  ></bbns-column>

</bbn-table>