import Accordion from "react-bootstrap/Accordion";
import { Button } from "react-bootstrap";
import "./MobileAccordion.css";
import { county } from "../../svg-buttons/county";
import { businessType } from "../../svg-buttons/business-type";
import { ownerType } from "../../svg-buttons/ownerType";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  businessTypeFiltersSelected,
  locationFiltersSelected,
  ownerTypeFiltersSelected,
} from "../../state-redux/Store/Selectors";


function MobileAccordion() {
  const locationFilters = useSelector(locationFiltersSelected);
  const ownerTypeFilters = useSelector(ownerTypeFiltersSelected);
  const businessTypeFilters = useSelector(businessTypeFiltersSelected);

  const dispatch = useDispatch();
  const handleClick = (id) => {
    if (id.includes("county")) {
      const county = id.split("-")[1];
      const index = locationFilters.indexOf(county);
      if (index === -1) {
        // If the county is not in the locationFilters array, it gets added
        dispatch({
          type: "locationFilters/addFilter",
          payload: county,
        });
      } else {
        // If the county is already in the locationFilters array, it gets removed
        dispatch({
          type: "locationFilters/removeFilter",
          payload: county,
        });
      }
    }
    if (id.includes("businessType")) {
      const businessType = id.split("-")[1];
      const index = businessTypeFilters.indexOf(businessType);
      if (index === -1) {
        // If the business type is not in the businessTypeFilters array, it gets added
        dispatch({
          type: "businessTypeFilters/addFilter",
          payload: businessType,
        });
      } else {
        // If the business type is already in the businessTypeFilters array, it gets removed
        dispatch({
          type: "businessTypeFilters/removeFilter",
          payload: businessType,
        });
      }
    }
    if (id.includes("ownerType")) {
      const ownerType = id.split("-")[1];
      const index = ownerTypeFilters.indexOf(ownerType);
      if (index === -1) {
        // If the owner type is not in the ownerTypeFilters array, it gets added
        dispatch({
          type: "ownerTypeFilters/addFilter",
          payload: ownerType,
        });
      } else {
        // If the owner type is already in the ownerTypeFilters array, it gets removed
        dispatch({
          type: "ownerTypeFilters/removeFilter",
          payload: ownerType,
        });
      }
    }
  };

  return (
    <Accordion className="filter-button accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Choose county</Accordion.Header>
        <Accordion.Body>
          <Button
            className={
              locationFilters.includes("jackson")
                ? "county countyClicked"
                : "county"
            }
            onClick={() => handleClick("county-jackson")}
          >
            {county.jackson}
          </Button>
          <Button
            className={
              locationFilters.includes("clinton")
                ? "county countyClicked"
                : "county"
            }
            onClick={() => handleClick("county-clinton")}
          >
            {county.clinton}
          </Button>
          <Button
            className={
              locationFilters.includes("platte")
                ? "county countyClicked"
                : "county"
            }
            onClick={() => handleClick("county-platte")}
          >
            {county.platte}
          </Button>
          <Button
            className={
              locationFilters.includes("lafayette")
                ? "county countyClicked"
                : "county"
            }
            onClick={() => handleClick("county-lafayette")}
          >
            {county.lafayette}
          </Button>
          <Button
            className={
              locationFilters.includes("wyandotte")
                ? "county countyClicked"
                : "county"
            }
            onClick={() => handleClick("county-wyandotte")}
          >
            {county.wyandotte}
          </Button>
          <Button
            className={
              locationFilters.includes("clay")
                ? "county countyClicked"
                : "county"
            }
            onClick={() => handleClick("county-clay")}
          >
            {county.clay}
          </Button>
          <Button
            className={
              locationFilters.includes("leavenworth")
                ? "county countyClicked"
                : "county"
            }
            onClick={() => handleClick("location-leavenworth")}
          >
            {county.leavenworth}
          </Button>
          <Button
            className={
              locationFilters.includes("bates")
                ? "county countyClicked"
                : "county"
            }
            onClick={() => handleClick("county-bates")}
          >
            {county.bates}
          </Button>
          <Button
            className={
              locationFilters.includes("caldwell")
                ? "county countyClicked"
                : "county"
            }
            onClick={() => handleClick("county-caldwell")}
          >
            {county.caldwell}
          </Button>
          <Button
            className={
              locationFilters.includes("cass")
                ? "county countyClicked"
                : "county"
            }
            onClick={() => handleClick("county-cass")}
          >
            {county.cass}
          </Button>
          <Button
            className={
              locationFilters.includes("linn")
                ? "county countyClicked"
                : "county"
            }
            onClick={() => handleClick("county-linn")}
          >
            {county.linn}
          </Button>
          <Button
            className={
              locationFilters.includes("ray")
                ? "county countyClicked"
                : "county"
            }
            onClick={() => handleClick("county-ray")}
          >
            {county.ray}
          </Button>
          <Button
            className={
              locationFilters.includes("miami")
                ? "county countyClicked"
                : "county"
            }
            onClick={() => handleClick("county-miami")}
          >
            {county.miami}
          </Button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Choose business type</Accordion.Header>
        <Accordion.Body>
          <Button
            className={
              businessTypeFilters.includes("food")
                ? "businessType businessClicked"
                : "businessType"
            }
            onClick={() => handleClick("businessType-food")}
          >
            {businessType.food}
          </Button>
          <Button
            className={
              businessTypeFilters.includes("coffee")
                ? "businessType businessClicked"
                : "businessType"
            }
            onClick={() => handleClick("businessType-coffee")}
          >
            {businessType.coffee}
          </Button>
          <Button
            className={
              businessTypeFilters.includes("home goods")
                ? "businessType businessClicked"
                : "businessType"
            }
            onClick={() => handleClick("businessType-home goods")}
          >
            {businessType.homeGoods}
          </Button>
          <Button
            className={
              businessTypeFilters.includes("clothing")
                ? "businessType businessClicked"
                : "businessType"
            }
            onClick={() => handleClick("businessType-clothing")}
          >
            {businessType.clothing}
          </Button>
          <Button
            className={
              businessTypeFilters.includes("others")
                ? "businessType businessClicked"
                : "businessType"
            }
            onClick={() => handleClick("businessType-others")}
          >
            {businessType.others}
          </Button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Choose owner type</Accordion.Header>
        <Accordion.Body>
          <Button
            className={
              ownerTypeFilters.includes("black")
                ? "ownerType ownerClicked"
                : "ownerType"
            }
            onClick={() => handleClick("ownerType-black")}
          >
            {ownerType.black}
          </Button>
          <Button
            className={
              ownerTypeFilters.includes("lgbtqia")
                ? "ownerType ownerClicked"
                : "ownerType"
            }
            onClick={() => handleClick("ownerType-lgbtqia")}
          >
            {ownerType.lgbtqia}
          </Button>
          <Button
            className={
              ownerTypeFilters.includes("woman")
                ? "ownerType ownerClicked"
                : "ownerType"
            }
            onClick={() => handleClick("ownerType-woman")}
          >
            {ownerType.woman}
          </Button>
          <Button
            className={
              ownerTypeFilters.includes("inmigrant")
                ? "ownerType ownerClicked"
                : "ownerType"
            }
            onClick={() => handleClick("ownerType-inmigrant")}
          >
            {ownerType.inmigrant}
          </Button>
          <Button
            className={
              ownerTypeFilters.includes("asian")
                ? "ownerType ownerClicked"
                : "ownerType"
            }
            onClick={() => handleClick("ownerType-asian")}
          >
            {ownerType.asian}
          </Button>
          <Button
            className={
              ownerTypeFilters.includes("latino")
                ? "ownerType ownerClicked"
                : "ownerType"
            }
            onClick={() => handleClick("ownerType-latino")}
          >
            {ownerType.latino}
          </Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MobileAccordion;
