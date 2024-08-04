# CLOUD RUN

resource "google_cloud_run_v2_service" "cbpio_cr" {
  name     = var.service_name
  location = var.region
  ingress  = "INGRESS_TRAFFIC_ALL"

  template {
    spec {
      containers {
        image = var.container_image
      }
      service_account_name = google_service_account.cloud_run_sa.email
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

# IAM

resource "google_service_account" "cloud_run_sa" {
  account_id   = var.service_account_id
  display_name = "Cloud Run Service Account"
}

resource "google_cloud_run_service_iam_member" "public" {
  service  = google_cloud_run_service.cbpio_cr.name
  location = google_cloud_run_service.cbpio_cr.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}
