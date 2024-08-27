import { useParams } from "react-router-dom";
import "../css/weaponPage.scss";
import { weaponsData } from "../types";
import { useState, useEffect } from "react";

interface types {
  data: weaponsData[];
}

const WeaponPage = ({ data }: types) => {
  const { ID } = useParams();
  const [weaponData, setWeaponData] = useState<weaponsData | undefined>(
    undefined
  );

  useEffect(() => {
    const weapon = data.find((weapon) => weapon.slug === ID);
    setWeaponData(weapon);
  }, [ID, data]);

  return (
    <div>
      {weaponData !== undefined && (
        <div className="weaponPage">
          <div className="weaponTitle">
            <p>{weaponData.name}</p>
          </div>
          <div className="itemCard">
            <div className="itemIcon">
              <img src={`/images/items/weapons/${weaponData.image}`}></img>
            </div>
            <div className="itemInfo">
              <div className="itemRequirements">
                <img src="/images/ui_icons/stat_strength.png"></img>
                <img src="/images/ui_icons/stat_dexterity.png"></img>
                <img src="/images/ui_icons/stat_intelligence.png"></img>
                <img src="/images/ui_icons/stat_faith.png"></img>
                <div className="itemReqStats">
                  {Object.keys(weaponData.req).map((key, index) => {
                    const requirement =
                      weaponData.req[key as keyof typeof weaponData.req];

                    return <p key={index}>{requirement}</p>;
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="itemDesc">
            <p>{weaponData.name}</p>
            <p>{weaponData.description}</p>
            <p>{weaponData.obtained}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeaponPage;
