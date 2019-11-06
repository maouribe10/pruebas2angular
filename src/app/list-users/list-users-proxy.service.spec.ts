import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ListUsersProxyService } from './list-users-proxy.service';

describe('ListUsersProxyService', () => { // Define una suit o conjunto de test, recibe un nombre cualquiera y una función con todos los test
  beforeEach(() => TestBed.configureTestingModule({ // Se configuran las dependencias del componente
    imports: [HttpClientModule],
    providers: [ListUsersProxyService]
  }));

  it('should be created', () => { //Crea el componente para el test
    const service: ListUsersProxyService = TestBed.get(ListUsersProxyService);
    expect(service).toBeTruthy(); // Comprueba que el componente se haya creado
  });

  it('should get users', async(() => {  //Test real del servicio <P integración>
    const service: ListUsersProxyService = TestBed.get(ListUsersProxyService);
    service.getUsers().subscribe(
      (response) => expect(response.any).not.toBeNull(),
      (error) => fail(error)
    );
  }))
});
