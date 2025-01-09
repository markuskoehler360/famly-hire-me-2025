import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CImage,
} from "@coreui/react";
import { pickupTimeslots } from "../data/timeslots";
import { Child } from "../types/child";
import { useState } from "react";
import { useCheckinChild, useCheckoutChild } from "../hooks/useChildren";
import {
  convertDateToReadibleString,
  filterTimeslots,
} from "../utils/dateUtils";

const DEFAULT_PICKUP_TIME = "16:00";

interface ChildItemProps {
  child: Child;
}

export default function ChildItem({ child }: ChildItemProps) {
  const [pickupTime, setPickupTime] = useState(DEFAULT_PICKUP_TIME);

  const checkinChild = useCheckinChild();
  const checkoutChild = useCheckoutChild();

  const handleCheckOut = async () => {
    checkoutChild.mutate({
      childId: child.childId,
    });
  };

  const handleCheckIn = async () => {
    checkinChild.mutate({
      childId: child.childId,
      pickupTime,
    });
  };

  return (
    <CCard className="m-4 w-50">
      <CCardBody className="flex auto">
        <CCardTitle>{child.name.fullName}</CCardTitle>
        <CImage
          rounded
          thumbnail
          src={child.image.large}
          width={200}
          height={200}
        />
        <CCardText>
          {child.checkedIn
            ? `Checked in since ${convertDateToReadibleString(
                child.checkinTime
              )}`
            : "Not checked in"}
        </CCardText>
        <CCardText>
          {child.checkedIn ? `Pickup time ${pickupTime}` : ""}
        </CCardText>
        {child.checkedIn ? (
          <CButton color="primary" onClick={handleCheckOut}>
            Check Out
          </CButton>
        ) : (
          <div>
            <CButton color="primary" onClick={handleCheckIn} className="me-2">
              Check in
            </CButton>

            <CDropdown>
              <CDropdownToggle color="secondary" label="Pickup Time">
                Pickup at: {pickupTime}
              </CDropdownToggle>
              <CDropdownMenu>
                {filterTimeslots(pickupTimeslots).map((item, index) => {
                  return (
                    <CDropdownItem
                      key={index}
                      onClick={() => setPickupTime(item)}
                    >
                      {item}
                    </CDropdownItem>
                  );
                })}
              </CDropdownMenu>
            </CDropdown>
          </div>
        )}
      </CCardBody>
    </CCard>
  );
}
