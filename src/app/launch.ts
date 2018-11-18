export class Launch {

      flight_number: number;
      mission_name: string;
      mission_id: Array<string>;
      launch_year: string;
      launch_date_unix: number;
      launch_date_utc: string;
      launch_date_local: string;
      is_tentative: boolean;
      tentative_max_precision: string;
      rocket: {
        rocket_id: string;
        rocket_name: string;
        rocket_type: string;
        first_stage: {
          cores: [
            {
              core_serial: string;
              flight: number
              block: number
              reused: boolean;
              land_success: boolean;
              landing_intent: boolean;
              landing_type: string;
              landing_vehicle: string;
            }
          ]
        }
        second_stage: {
          block: number;
          payloads: [
            {
              payload_id: string;
              norad_id: [
                number
              ]
              reused: boolean;
              customers: [
                string
              ]
              nationality: string
              manufacturer: string
              payload_type: string
              payload_mass_kg: number
              payload_mass_lbs: number
              orbit: string
              orbit_params: {
                reference_system: string
                regime: string
                longitude: number
                semi_major_axis_km: number
                eccentricity: number
                periapsis_km: number
                apoapsis_km: number
                inclination_deg: number
                period_min: number
                lifespan_years: number
                epoch: string
                mean_motion: number;
                raan: number
                arg_of_pericenter: number
                mean_anomaly: number
              }
            }
          ]
        }
        fairings: {
          reused: boolean;
          recovery_attempt: boolean;
          recovered: boolean;
          ship: string;
        }
      }
      ships: Array<string>;
      telemetry: {
        flight_club: string;
      }
      reuse: {
        core: boolean;
        side_core1: boolean;
        side_core2: boolean;
        fairings: boolean;
        capsule: boolean;
      }
      launch_site: {
        site_id: string;
        site_name: string;
        site_name_long: string;
      }
      launch_success: boolean;
      links: {
        mission_patch: string;
        mission_patch_small: string;
        reddit_campaign: string;
        reddit_launch: string;
        reddit_recovery: string;
        reddit_media: string;
        presskit: string;
        article_link: string;
        wikipedia: string;
        video_link: string;
        flickr_images: Array<string>
      }
      details: string;
      upcoming: boolean;
      static_fire_date_utc: string;
      static_fire_date_unix: number;
}