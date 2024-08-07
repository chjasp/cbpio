# --- CLOUD RUN

resource "google_cloud_run_v2_service" "cbpio_cr" {
  name     = var.service_name
  location = var.region
  ingress  = "INGRESS_TRAFFIC_ALL"

  template {

    service_account = google_service_account.cloud_run_sa.email
    
    scaling {
      max_instance_count = 2
    }

    containers {
      image = var.container_image
      ports {
        container_port = 3000
      }
      
      resources {
        limits = {
          cpu    = "1"
          memory = "512Mi"
        }
      }
    }
  }

  traffic {
    type    = "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST"
    percent = 100
  }
}

# --- IAM

resource "google_service_account" "cloud_run_sa" {
  account_id   = var.service_account_id
  display_name = "Cloud Run Service Account"
}

resource "google_cloud_run_service_iam_member" "public" {
  service  = google_cloud_run_v2_service.cbpio_cr.name
  location = google_cloud_run_v2_service.cbpio_cr.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}