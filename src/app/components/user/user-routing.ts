import { NewUserComponent } from './new-user.component';
import { EditUserComponent } from './edit-user.component';
import { DeleteUserComponent } from './delete-user.component';


export const USER_ROUTES = [
    { path: 'new-user', component: NewUserComponent },
    { path: 'edit-user', component: EditUserComponent },
    { path: 'delete-user', component: DeleteUserComponent },
    { path: '**', redirectTo: 'new-user' },
];
