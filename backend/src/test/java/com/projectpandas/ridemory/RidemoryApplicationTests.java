package com.projectpandas.ridemory;

import com.projectpandas.ridemory.models.Locations;
import com.projectpandas.ridemory.models.Trip;
import com.projectpandas.ridemory.services.InfoService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static com.mongodb.assertions.Assertions.assertNotNull;

@SpringBootTest
class RidemoryApplicationTests {

	@Autowired
	private InfoService infoService;
	@Test
	public void testGetTripDuration() throws Exception {
		// Create a Trip object with origin and destination locations
		Trip trip = new Trip();
		trip.setOrigin(Locations.NORTH_PARKWAY.getPoint());
		trip.setDestination(Locations.SOUTH_PARKWAY.getPoint());
		String actualResult = infoService.getTrafficTimeEstimate(trip);
		System.out.println(actualResult);
		assertNotNull(actualResult);
	}
	@Test
	void contextLoads() {
	}

}
