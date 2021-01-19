<?php

if ( isset($ctrl->post['structure']) ){
  $ctrl->action();
}
else{
  $ctrl->combo(_("Components' state"), true);
}